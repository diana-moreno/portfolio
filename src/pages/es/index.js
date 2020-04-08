import React, { useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../../components/Layout"
import styles from '../index.module.scss'
import Navbar from '../../components/Navbar'
import ArrowBounce from '../../components/ArrowBounce'
import WhiteTriangle from '../../assets/white_triangle.svg'
import LeftArrow from '../../assets/left_arrow.svg'
import RightArrow from '../../assets/right_arrow.svg'
import Img from 'gatsby-image'
import Form from '../../components/Form'
import ConceptKey from '../../components/ConceptKey'
import conceptsKey from '../../data/concepts_key'
import { t } from '../../i18n'
import projectsData from '../../data/projects.js'
import Languages from "../../components/Languages"
import allUrls from "../../urls/allUrls"
import CvIcon from '../../assets/curriculum-vitae.svg'
import curriculum from '../../data/cv.pdf'

const lang = 'es'

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

  // const lastDefault = (window.innerWidth < 500) ? 4 : 8

  const [initial, setInitial] = useState(0)
  const [last, setLast] = useState(8)
  const totalItems = 24
  const totalPages = totalItems / 8
  const [actualPage, setActualPage] = useState(0)

  const goToNextSlide = () => {
    // console.log(window.innerWidth)
    // if(window.innerWidth < 500) {
    //   if(last < 24) {
    //     setInitial(initial + 4)
    //     setLast(last + 4)
    //     setActualPage(actualPage + 1)
    //   }
    //   return    
    // }
    if (last < 24) {
      setInitial(initial + 8)
      setLast(last + 8)
      setActualPage(actualPage + 1)
    }
  }
  const goToPreviousSlide = () => {
    // console.log(window.innerWidth)
    // if(window.innerWidth < 500) {
    //   if(initial > 1) {
    //     setInitial(initial - 4)
    //     setLast(last - 4)
    //     setActualPage(actualPage - 1)
    //   }
    //   return    
    // }
    if (initial > 1) {
      setInitial(initial - 8)
      setLast(last - 8)
      setActualPage(actualPage - 1)
    }
  }

  const switchToPage = (index) => {
    if (index === 0) {
      setInitial(0)
      setLast(8)
    } else if (index === 1) {
      setInitial(8)
      setLast(16)
    } else if (index === 2) {
      setInitial(16)
      setLast(24)
    }
    setActualPage(index)
  }




// Intersection Observer
const [indexMenu, setIndexMenu] = useState(0)


// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    // verify the element is intersecting
    if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      if(entry.target.id === 'home') {
        setIndexMenu(0)
      }
      if(entry.target.id === 'about') {
        setIndexMenu(1)
      }
      if(entry.target.id === 'projects') {
        setIndexMenu(2)
      }
      if(entry.target.id === 'contact') {
        setIndexMenu(3)
      }
    }
  })
}

// init the observer
const options = {
  threshold: 0.55
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
          <div>
            <h3 className={styles.cv_title}>{t('about.cv_text', lang)}</h3>
            <a className={styles.cv_button} href={curriculum} download>{t('about.cv_button', lang)}</a>
          </div>
          <CvIcon className={styles.cv_icon} />
        </div>
      </section>


      {/* <!-- PROJECTS --> */}
      <section ref={projectsRef} id='projects' className={styles.projects}>
        <div className={styles.title_section}>
          <h1>{t('projects.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        {/* <!-- FILTER --> */}
        <div className={styles.filters}>
        <div className={styles.filter_active}>{t('projects.all', lang)}</div>
          <div className={styles.filter}>REACT</div>
          <div className={styles.filter}>GATSBY</div>
          <div className={styles.filter}>JS/EXPRESS</div>
        </div>

        <div className={styles.projects_container}>

          {projectsData.slice(initial, last).map(elem => (
            <div className={styles.card}>
              <div className={styles.project_image_container}>
                <a href={t(elem.url, lang)} project={elem} >
                  <Img
                    className={styles.project_image}
                    fixed={projects.edges.find(img => img.node.childImageSharp.fixed.src.indexOf(elem.image) > 1).node.childImageSharp.fixed}
                    alt={t(elem.title, lang)} 
                  />
                </a>

                {/* TODO LINKS */}
                {/* cuando haces click a un punto, se desordenan los proyectos */}
              </div>
              <div className={styles.project_title}>{t(elem.title, lang)}</div>
            </div>
          ))}

          {/* <!-- PROJECT DOTS --> */}
          <div className={styles.dots_container}>
            {[...Array(totalPages)].map((page, i) =>
              <button
                onClick={() => switchToPage(i)}
                className={actualPage === i ? `${styles.dot_active} ${styles.dot}` : styles.dot}
              />
            )}
          </div>

          {/* <!-- PROJECT ARROWS --> */}
          {initial > 0 && <LeftArrow
            className={styles.left_arrow}
            onClick={goToPreviousSlide}
          />}

          {last < totalItems && <RightArrow
            className={styles.right_arrow}
            onClick={goToNextSlide}
          />}
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
