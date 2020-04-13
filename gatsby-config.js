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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
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
    `gatsby-plugin-sitemap`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
