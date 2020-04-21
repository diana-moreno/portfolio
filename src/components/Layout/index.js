import React from "react"
import PropTypes from "prop-types"
import "./layout.module.scss"
import Footer from '../Footer'
import Seo from "../Seo"
import 'normalize.css'

const Layout = ({ seoData, children }) => {
  return (
    <div className='main_container'>
      <Seo seoData={seoData} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  seoData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
