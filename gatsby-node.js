/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const urls = require('./src/urls.json');

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