const slash = require('slash')
const path = require('path')

const urls = require('./src/urls/urls.json');
const urlsProjects = require('./src/urls/urlsProjects.json');


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

  urlsProjects.forEach(elem => {
    createPage({
      path: elem.url,
      component: slash(path.resolve('./src/templates/project.js')),
      context: {
        ...page.context,
        lang: elem.lang,
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