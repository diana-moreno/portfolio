import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from '../../styles/notFound.module.scss'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"
import LayoutWithMenu from '../../components/Layout/LayoutWithMenu'

const lang = 'ca'

const NotFoundPage = ({ location }) => {
  const { seoJson } = useStaticQuery(graphql`
  query {
    seoJson(name: { eq: "home" }) {
      url_ca
      title_ca
      description_ca
      alternateLanguage_ca
      alternateUrl_ca
    }
  }
`)

const seoData = {
  lang: lang,
  url: seoJson.url_ca,
  titleSeo: seoJson.title_ca,
  description: seoJson.description_ca,
  alternateLanguage: seoJson.alternateLanguage_ca,
  alternateUrl: seoJson.alternateUrl_ca,
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
