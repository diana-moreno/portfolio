import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Confirmation from "../../components/Confirmation"
import '../index.module.scss'
import LayoutWithMenu from '../../components/Layout/LayoutWithMenu'

const lang = 'es'

const ConfirmationPage = ({ location }) => {
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
    <LayoutWithMenu 
      seoData={seoData} 
      location={location} 
      indexMenu={undefined} 
      lang={lang} 
    >
      <Confirmation lang={lang} />
    </LayoutWithMenu>
  )
}

export default ConfirmationPage
