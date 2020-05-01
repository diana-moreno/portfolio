import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NotFound from '../../components/NotFound'

const lang = 'de'

const NotFoundPage = ({ location }) => {
  const { seoJson } = useStaticQuery(graphql`
    query {
      seoJson(name: { eq: "home" }) {
        url_de
        title_de
        description_de
        alternateLanguage_de
        alternateUrl_de
      }
    }
  `)

  const seoData = {
    lang: lang,
    url: seoJson.url_de,
    titleSeo: seoJson.title_de,
    description: seoJson.description_de,
    alternateLanguage: seoJson.alternateLanguage_de,
    alternateUrl: seoJson.alternateUrl_de
  }
  return <NotFound seoData={seoData} lang={lang} location={location} />
}
export default NotFoundPage
