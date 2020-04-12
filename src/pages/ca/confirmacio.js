import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../../components/Confirmation"
import Seo from "../../components/Seo"
import '../index.module.scss'

const lang = 'ca'

const ConfirmationPage = () => {
  const { seoJson } = useStaticQuery(graphql`
    query {
      seoJson(name: { eq: "confirmation" }) {
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
    <>
      <Seo seoData={seoData} />
      <Confirmation lang={lang} />
    </>
)}

export default ConfirmationPage
