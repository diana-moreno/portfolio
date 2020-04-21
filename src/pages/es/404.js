import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import NotFound from '../../components/NotFound'

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
  return <NotFound seoData={seoData} lang={lang} location={location} />
}
export default NotFoundPage
