import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import styles from './index.module.scss'
import Navbar from '../components/Navbar'
import ArrowBounce from '../components/ArrowBounce'
import WhiteTriangle from '../assets/white_triangle.svg'
import Img from 'gatsby-image'
import Form from '../components/Form'
import ConceptKey from '../components/ConceptKey'
import conceptsKey from '../data/concepts_key'
import { t } from '../i18n'
import projectsData from '../data/projects.js'
import Languages from "../components/Languages"
import allUrls from "../urls/allUrls"
import CvIcon from '../assets/curriculum-vitae.svg'
import curriculum from '../data/cv_en.pdf'
import { navigate } from 'gatsby'

const lang = 'en'

const IndexPage = ({ pageContext, location }) => {
  const { image, projects } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      projects: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
        edges {
          node {
            name
            publicURL,
            childImageSharp {
              fixed(height: 200, width: 270) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const imageUrl = image.childImageSharp.fluid.src

  // Intersection Observer
  const [indexMenu, setIndexMenu] = useState(0)

  // simple function to use for callback in the intersection observer
  const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      // verify the element is intersecting
      if (entry.isIntersecting && entry.intersectionRatio) {
        if (entry.target.id === 'home') {
          setIndexMenu(0)
        }
        if (entry.target.id === 'about') {
          setIndexMenu(1)
        }
        if (entry.target.id === 'projects') {
          setIndexMenu(2)
        }
        if (entry.target.id === 'contact') {
          setIndexMenu(3)
        }
      }
    })
  }

  // init the observer
  const options = {
    threshold: 0.39
  }

  // target the elements to be observed
  const homeRef = React.useRef()
  const aboutRef = React.useRef()
  const projectsRef = React.useRef()
  const contactRef = React.useRef()

  // create the refs after them achieve value
  let homeElem
  let aboutElem
  let projectsElem
  let constantElem

  useEffect(
    () => {
      const observer = new IntersectionObserver(changeNav, options)
      homeElem = homeRef.current
      aboutElem = aboutRef.current
      projectsElem = projectsRef.current
      constantElem = contactRef.current

      const sections = [homeElem, aboutElem, projectsElem, constantElem]
      sections.forEach((section) => {
        observer.observe(section)
      })
    },
    [homeElem]
  )

  // Filters
  const [currentFilter, setCurrentFilter] = useState('all')
  const handleFilter = (filter) => {
    setCurrentFilter(filter)
  }

  return (
    <Layout>
      {/* <!-- LANGUAGES --> */}
      <Languages location={location} lang={lang} />

      {/* <!-- HOME --> */}
      <section ref={homeRef} id='home' className={styles.home}>
        <div className={styles.greeting}>
          {t('home.greeting', lang)}<span className={styles.greeting__name}>
            {t('home.author', lang)}</span>.
          <br></br>
          {t('home.author_position', lang)}
        </div>
        <div className={styles.more} dest="about">
          <p>{t('home.view_more', lang)}</p>
          <Link to={allUrls[2][`url_${lang}`]}>
            <ArrowBounce />
          </Link>
        </div>
      </section>

      {/* <!-- NAVBAR --> */}
      <Navbar lang={lang} indexMenu={indexMenu} />

      {/* <!-- ABOUT --> */}
      <section ref={aboutRef} id='about' className={styles.about}>
        <div className={styles.title_section}>
          <h1>{t('about.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.circles_container}>
          {
            conceptsKey.map(concept =>
              <ConceptKey
                title={concept.title}
                description={concept.description}
                icon={concept.icon}
                lang={lang}
              />
            )
          }
        </div>
        <div className={styles.aboutme}>
          <div className={styles.aboutme_image_container}>
            <img className={styles.aboutme_image} alt='Profile photography' src={imageUrl} />
          </div>
          <div className={styles.aboutme_text}>
            <h3>{t('about.nowadays.title', lang)}</h3>
            <p>
              {t('about.nowadays.section_1', lang)}<br></br>
              {t('about.nowadays.section_2', lang)}
            </p>
            <h3>{t('about.my_story.title', lang)}</h3>
            <p>
              {t('about.my_story.section_1', lang)}<br></br>
              {t('about.my_story.section_2', lang)}
            </p>
            <p>{t('about.my_story.section_3', lang)}</p>
            <h3>{t('about.passions.title', lang)}</h3>
            <p>{t('about.passions.section_1', lang)}</p>
          </div>
        </div>
      </section>
      <section className={styles.curriculum}>
        <div>
          <CvIcon className={styles.cv_icon} />
          <div>
            <h3 className={styles.cv_title}>{t('about.cv_text', lang)}</h3>
            <a className={styles.cv_button} href={curriculum} download>{t('about.cv_button', lang)}</a>
          </div>
        </div>
      </section>

      {/* <!-- PROJECTS --> */}
      <section ref={projectsRef} id='projects' className={styles.projects}>
        <div>
          <div className={styles.title_section}>
            <h1>{t('projects.title', lang)}</h1>
            <div className={styles.title_section_line}></div>
          </div>
          <div className={styles.filters}>
            <div
              onClick={() => handleFilter('all')}
              className={currentFilter === 'all'
                ? `${styles.filter} ${styles.filter_active}` : styles.filter}
            >{t('projects.all', lang)}</div>
            <div
              onClick={() => handleFilter('react')}
              className={currentFilter === 'react'
                ? `${styles.filter} ${styles.filter_active}` : styles.filter}
            >REACT</div>
            <div
              onClick={() => handleFilter('node')}
              className={currentFilter === 'node'
                ? `${styles.filter} ${styles.filter_active}` : styles.filter}
            >NODE</div>
            <div
              onClick={() => handleFilter('javascript')}
              className={currentFilter === 'javascript'
                ? `${styles.filter} ${styles.filter_active}` : styles.filter}
            >JS/HTML</div>
          </div>
          <div className={styles.projects_container}>
            {projectsData.map(elem => {
              if (elem.technology.includes(currentFilter)) {
                return (
                  <div className={styles.card}>
                    <div className={styles.project_image_container}>
                      <a href={t(elem.url, lang)} project={elem} >
                        <Img
                          className={styles.project_image}
                          fixed={projects.edges.find(img => img.node.childImageSharp.fixed.src.indexOf(elem.image) > 1).node.childImageSharp.fixed}
                          alt={t(elem.title, lang)}
                        />
                      </a>
                    </div>
                    <p className={styles.project_title}>{t(elem.title, lang)}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>

      {/* <!-- CONTACT --> */}
      <section ref={contactRef} id='contact' className={styles.contact}>
        <div className={styles.title_section}>
          <h1>{t('contact.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <WhiteTriangle className={styles.white_triangle} />
        <Form lang={lang} />
      </section>
    </Layout>
  )
}

export default IndexPage
