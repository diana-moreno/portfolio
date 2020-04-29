import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../../components/Confirmation"
import LayoutWithMenu from '../../components/Layout/LayoutWithMenu'

const lang = 'de'

const ConfirmationPage = ({ location }) => {
  const { seoJson } = useStaticQuery(graphql`
    query {
      seoJson(name: { eq: "confirmation" }) {
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
    alternateUrl: seoJson.alternateUrl_de,
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
