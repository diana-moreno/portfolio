import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import NotFound from "../components/NotFound"

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
  return <NotFound seoData={seoData} lang={lang} location={location} />
}
export default NotFoundPage
