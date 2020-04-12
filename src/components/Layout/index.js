import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from '../Footer'
import Seo from "../Seo"

const Layout = ({ seoData, children }) => {
  console.log(seoData)
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
