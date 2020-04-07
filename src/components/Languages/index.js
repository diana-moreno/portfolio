import React from "react"
import { Link } from 'gatsby'
import styles from '../../pages/index.module.scss'
import allUrls from '../../urls/allUrls.js'

const Languages = ({ location, lang }) => {
  const currentLocation = location.pathname
  const currentUrl = allUrls.find(elem => elem[`url_${lang}`] === currentLocation)

  return (
    <div className={styles.languages}>
      <p>
        {/* <Link to={currentUrl.url_en} className={`${styles.language_item} ${lang === 'en' ? styles.language_active : ''}`}>en</Link>
        <span> / </span> */}
        <Link to={currentUrl.url_es} className={`${styles.language_item} ${lang === 'es' ? styles.language_active : ''}`}>es</Link>
        <span> / </span>
        <Link to={currentUrl.url_ca} className={`${styles.language_item} ${lang === 'ca' ? styles.language_active : ''}`}>ca</Link>
        {/* <span> / </span> */}
        {/* <Link to={currentUrl.url_de} className={`${styles.language_item} ${lang === 'de' ? styles.language_active : ''}`}>de</Link> */}
      </p>
    </div>
  )
} 

export default Languages