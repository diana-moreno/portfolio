import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './notFound.module.scss'
import { t } from '../i18n'
import allUrls from "../urls/allUrls"
import './index.module.scss'
import LayoutWithMenu from '../components/Layout/LayoutWithMenu'

const lang = 'en'

const NotFoundPage = ({ location }) => {
  const { seoJson } = useStaticQuery(graphql`
  query {
    seoJson(name: { eq: "home" }) {
      url_en
      title_en
      description_en
      alternateLanguage_en
      alternateUrl_en
    }
  }
`)

const seoData = {
  lang: lang,
  url: seoJson.url_en,
  titleSeo: seoJson.title_en,
  description: seoJson.description_en,
  alternateLanguage: seoJson.alternateLanguage_en,
  alternateUrl: seoJson.alternateUrl_en,
}
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
export default NotFoundPage
