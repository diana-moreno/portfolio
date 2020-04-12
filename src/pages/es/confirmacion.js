import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../../components/Confirmation"
import Seo from "../../components/Seo"
import '../index.module.scss'

const lang = 'es'

const ConfirmationPage = () => {
  const { seoJson } = useStaticQuery(graphql`
    query {
      seoJson(name: { eq: "confirmation" }) {
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
    <>
      <Seo seoData={seoData} />
      <Confirmation lang={lang} />
    </>
)}

export default ConfirmationPage
