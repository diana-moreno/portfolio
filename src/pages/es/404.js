import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from '../notFound.module.scss'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"
import '../index.module.scss'
import LayoutWithMenu from '../../components/Layout/LayoutWithMenu'

const lang = 'es'

const NotFoundPage = ({ location }) => {
  const { seoJson } = useStaticQuery(graphql`
  query {
    seoJson(name: { eq: "home" }) {
      url_es
      title_es
      description_es
      alternateLanguage_es
      alternateUrl_es
    }
  }
`)

const seoData = {
  lang: lang,
  url: seoJson.url_es,
  titleSeo: seoJson.title_es,
  description: seoJson.description_es,
  alternateLanguage: seoJson.alternateLanguage_es,
  alternateUrl: seoJson.alternateUrl_es,
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
