const slash = require('slash')
const path = require('path')

const urls = require('./src/urls.json');
const projectsData = require('./src/data/jsonProjects.json');


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createPage({
    ...page,
    context: {
      ...page.context,
      urls
    }
  })

  projectsData.forEach(elem => {
    createPage({
      path: elem.image,
      component: slash(path.resolve('./src/templates/project.js')),
      context: {
        ...page.context,
        urls,
        projectName: elem.image
      }
    })
  })
}
      
      
// const locales = require('./src/locales')
// const path = require('path')
 
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
 
//   return new Promise(resolve => {
//     deletePage(page)
 
//     Object.keys(locales).map(lang => {
//       const localizedPath = locales[lang].default
//         ? page.path
//         : locales[lang].path + page.path
//       return createPage({
//         ...page,
//         path: localizedPath,
//         context: {
//           locale: lang
//         }
//       })
//     })
 
//     resolve()
//   })
// }