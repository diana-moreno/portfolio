import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import NotFound from '../../components/NotFound'

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
  return <NotFound seoData={seoData} lang={lang} location={location} />
}
export default NotFoundPage
