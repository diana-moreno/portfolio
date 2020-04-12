import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../components/Confirmation"
import Seo from "../components/Seo"
import './index.module.scss'

const lang = 'en'

const ConfirmationPage = () => {
  const { seoJson } = useStaticQuery(graphql`
    query {
      seoJson(name: { eq: "confirmation" }) {
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
    <>
      <Seo seoData={seoData} />
      <Confirmation lang={lang} />
    </>
)}

export default ConfirmationPage
