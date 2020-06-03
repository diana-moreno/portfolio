import React from 'react'
import Helmet from 'react-helmet'

export const Seo = ({ seoData }) => {
  const {
    lang,
    titleSeo,
    description,
    url,
    alternateLanguage,
    alternateUrl,
    keywords = 'portfolio javascript react node gatsby bootcamp',
  } = seoData

  return (
    <Helmet>
      <html lang={lang} />
      <meta
        name="google-site-verification"
        content="lUmWWReT0AR_WC7mboNPBzcawIlRr23cOtEMn33Fp_k"
      />
      <meta property="og:title" content={titleSeo} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={
          'https://dianamoreno.netlify.com/static/23b24d90b547890826ad5695714a93ef/57bf2/profile.png'
        }
      />
      <meta name="keywords" content={keywords} />
      <meta name="mobile-wep-app-capable" content="yes"></meta>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <title>{titleSeo}</title>
      <link rel="alternate" hrefLang={alternateLanguage} href={alternateUrl} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default Seo
