import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../../components/Confirmation"
import '../index.module.scss'
import LayoutWithMenu from '../../components/Layout/LayoutWithMenu'

const lang = 'ca'

const ConfirmationPage = ({ location }) => {
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
