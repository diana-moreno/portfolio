import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "./layout.css"
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div className='main_container'>
      <main>{children}</main>
      <Footer />
      <Helmet>
        <title>Diana Moreno Portfolio</title>
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
