import React from "react"
import Helmet from "react-helmet"

export const Seo = ({ seoData }) => {
  const { 
    lang, 
    titleSeo, 
    description, 
    url, 
    alternateLanguage, 
    alternateUrl, 
    keywords = "portfolio javascript react node gatsby bootcamp" 
  } = seoData

  return (
    <Helmet>
      <html lang={lang} />
      <meta property="og:title" content={titleSeo} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {/* <meta
        property="og:image"
        content={
          "https://media-exp1.licdn.com/dms/image/C561BAQHYX3-RmKAp_g/company-background_10000/0?e=2159024400&v=beta&t=eUtjHmuoEpno3rswGYGBPYJmd7sgXQL-rT36Cf_Ibak"
        }
      /> */}
      <meta name="keywords" content={keywords} />
      <title>{titleSeo}</title>
      <link rel="alternate" hrefLang={alternateLanguage} href={alternateUrl} />
      <link rel="canonical" href={url} />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        rel="stylesheet"
        />
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet"></link>
    </Helmet>
  )
}

export default Seo