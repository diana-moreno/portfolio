import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import styles from './notFound.module.scss'
import { t } from '../i18n'
import allUrls from "../urls/allUrls"
import './index.module.scss'
// import SEO from "../components/seo"

const NotFoundPage = ({ location }) => {
  let lang
  const path = location.pathname.slice(1, 4)
  if(path === 'es/' || path === 'ca/' || path === 'de/') {
    lang = location.pathname.slice(1, 3)
  } else {
    lang = 'en'
  }
  
  return (
    <div className={styles.not_found}>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.text_404}>
        <h1>404</h1>
        <p>{t('error.message', lang)}</p>
        <Link
          className={styles.not_found_button} 
          to={allUrls[1][`url_${lang}`]}
        >{t('error.button', lang)}</Link>
      </div>
    </div>
  )
}
export default NotFoundPage
