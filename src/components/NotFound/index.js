import React from "react"
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"
import LayoutWithMenu from '../Layout/LayoutWithMenu'

const NotFound = ({ location, lang, seoData }) => {
  return (
    <LayoutWithMenu 
      seoData={seoData} 
      location={location} 
      lang={lang} 
    >
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
    </LayoutWithMenu>
  )
}
export default NotFound
