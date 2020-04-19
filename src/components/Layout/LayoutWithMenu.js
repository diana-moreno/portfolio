import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from '../Footer'
import Seo from "../Seo"
import Menu from '../Menu'
import Languages from '../Languages'

const LayoutWithMenu = ({ seoData, children, location, lang }) => {
  return (
    <div className='main_container'>
      <Seo seoData={seoData} />
      <Languages location={location} lang={lang}/>
      <Menu lang={lang} indexMenu={undefined} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

LayoutWithMenu.propTypes = {
  seoData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
}

export default LayoutWithMenu