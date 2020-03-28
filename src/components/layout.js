/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "./layout.css"
import Footer from '../components/Footer'

const Layout = ({ children, locale }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <Footer />
      <Helmet>
        <title>Diana Moreno</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/c0a664ee11.js" crossorigin="anonymous"></script>
      </Helmet>
    </>
  )
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
