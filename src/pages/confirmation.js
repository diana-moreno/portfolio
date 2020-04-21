import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../components/Confirmation"
import LayoutWithMenu from '../components/Layout/LayoutWithMenu'

const lang = 'en'

const ConfirmationPage = ({ location }) => {
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
    <LayoutWithMenu 
      seoData={seoData} 
      location={location} 
      indexMenu={undefined} 
      lang={lang} 
    >
      <Confirmation lang={lang} />
    </LayoutWithMenu>
)}

export default ConfirmationPage
