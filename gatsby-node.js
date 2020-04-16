const slash = require('slash')
const path = require('path')
const urlsProjects = require('./src/urls/urlsProjects.json');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createPage({
    ...page,
    context: {
      ...page.context
    }
  })

  urlsProjects.forEach(elem => {
    createPage({
      path: elem.url,
      component: slash(path.resolve('./src/templates/project.js')),
      context: {
        ...page.context,
        lang: elem.lang,
        projectName: elem.image
      }
    })
  })

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage({
      ...page
    })
  }
}
