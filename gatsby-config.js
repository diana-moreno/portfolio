module.exports = {
  siteMetadata: {
    title: `Diana Moreno - Portafolio`,
    description: `Este es mi Portafolio, en él encontrarás un listado de todos mis proyectos personales y detalles sobre ellos, además de enlaces a demos, código fuente, mi biografía o mi curriculum. Ha sido traducida a 4 idiomas, ya que ha sido desarrollada expresamente para colaborar en el trabajo de fin de grado de mi hermana sobre traducciones tecnológicas.`,
    siteUrl: `https://www.dianamoreno.netlify.com`,
    author: `Diana Moreno`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diana Moreno`,
        short_name: `Diana Moreno`,
        start_url: `/`,
        background_color: `#1b242f`,
        theme_color: `#151b22`,
        display: `standalone`,
        // display: `minimal-ui`,
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
        cache_busting_mode: 'none',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/category/*`, `/path/to/page`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `monthly`,
              priority: 0.7,
            }
          }),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
  ],
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
