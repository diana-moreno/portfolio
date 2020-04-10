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
}
