import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Languages from '../components/Languages'
import Home from '../components/Home'
import About from '../components/About'
import Translations from '../components/Translations'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import curriculum from '../data/cv_en.pdf'
import { t } from '../i18n'

const lang = 'en'

const IndexPage = ({ location }) => {
  const { image, yoliImage, projectsImg, seoJson } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yoliImage: file(relativePath: { eq: "yoli.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectsImg: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            name
            publicURL
            childImageSharp {
              fixed(height: 200, width: 270) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      seoJson(name: { eq: "home" }) {
        url_en
        title_en
        description_en
        alternateLanguage_en
        alternateUrl_en
      }
    }
  `)

  const imageProfile = image.childImageSharp.fluid
  const yoliProfile = yoliImage.childImageSharp.fluid
  const seoData = {
    lang: lang,
    url: seoJson.url_en,
    titleSeo: seoJson.title_en,
    description: seoJson.description_en,
    alternateLanguage: seoJson.alternateLanguage_en,
    alternateUrl: seoJson.alternateUrl_en
  }

  // Intersection Observer
  const [indexMenu, setIndexMenu] = useState(0)

  // simple function to use for callback in the intersection observer
  const changeNav = (entries, observer) => {
    entries.forEach(entry => {
      // verify the element is intersecting
      if (entry.isIntersecting && entry.intersectionRatio) {
        if (entry.target.id === t('home.ref', lang)) {
          setIndexMenu(0)
        }
        if (entry.target.id === t('about.ref', lang)) {
          setIndexMenu(1)
        }
        if (entry.target.id === t('projects.ref', lang)) {
          setIndexMenu(2)
        }
        if (entry.target.id === t('translations.ref', lang)) {
          setIndexMenu(3)
        }
        if (entry.target.id === t('contact.ref', lang)) {
          setIndexMenu(4)
        }
      }
    })
  }

  // init the observer
  const options = {
    threshold: 0.35
  }

  // target the elements to be observed
  const homeRef = React.useRef()
  const aboutRef = React.useRef()
  const projectsRef = React.useRef()
  const translationsRef = React.useRef()
  const contactRef = React.useRef()

  // create the refs after them achieve value
  let homeElem
  let aboutElem
  let projectsElem
  let translationsElem
  let constantElem

  useEffect(() => {
    const observer = new IntersectionObserver(changeNav, options)
    homeElem = homeRef.current
    aboutElem = aboutRef.current
    projectsElem = projectsRef.current
    translationsElem = translationsRef.current
    constantElem = contactRef.current

    const sections = [homeElem, aboutElem, projectsElem, translationsElem, constantElem]
    sections.forEach(section => {
      observer.observe(section)
    })
  }, [homeElem])

  return (
    <Layout seoData={seoData} lang={lang}>
      <Languages location={location} lang={lang} />
      <Home lang={lang} homeRef={homeRef} />
      <Menu lang={lang} indexMenu={indexMenu} />
      <About
        lang={lang}
        aboutRef={aboutRef}
        imageProfile={imageProfile}
        curriculum={curriculum}
      />
      <Projects
        lang={lang}
        projectsRef={projectsRef}
        projectsImg={projectsImg}
      />
      <Translations
        lang={lang}
        translationsRef={translationsRef}
        imageProfile={yoliProfile}
        curriculum={curriculum}
      />
      <Contact lang={lang} contactRef={contactRef} />
    </Layout>
  )
}

export default IndexPage
