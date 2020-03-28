import React, { useState } from "react"
import { navigate, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import styles from './index.module.scss'
import Navbar from '../components/Navbar'
import ArrowBounce from '../components/ArrowBounce'
import WhiteTriangle from '../assets/white_triangle.svg'
import LeftArrow from '../assets/left_arrow.svg'
import RightArrow from '../assets/right_arrow.svg'
import Img from 'gatsby-image'
import Form from '../components/Form'
import ConceptKey from '../components/ConceptKey'
import conceptsKey from '../data/concepts_key'
import { t } from '../i18n'
import projectsData from '../data/projects'

const lang = 'en'

const IndexPage = ({ pageContext }) => {
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


  return (
    <Layout>

      {/* <!-- LANGUAGES --> */}
      <div className={styles.languages}>
        <p><span className={styles.language_item}>en</span><span> / </span><span className={styles.language_item}>es</span><span> / </span><span className={styles.language_item}>ca</span><span> / </span><span className={styles.language_item}>de</span></p>
      </div>

      {/* <!-- HOME --> */}
      <section id='home-container' className={styles.home}>
        <div className={styles.greeting}>
          {t('home.greeting', lang)}<span className={styles.greeting__name}>
            {t('home.author', lang)}</span>.
          <br></br>
          {t('home.author_position', lang)}
        </div>
        <div className={styles.more} dest="about">
          <p>{t('home.view_more', lang)}</p>
          <ArrowBounce />
        </div>
      </section>

      {/* <!-- NAVBAR --> */}
      <Navbar />

      {/* <!-- ABOUT --> */}
      <section className={styles.about}>
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
            <h3>{t('about.my_story.title', lang)}</h3>
            <p>
              {t('about.my_story.section_1', lang)}<br></br>
              {t('about.my_story.section_2', lang)}.
            </p>
            <p>{t('about.my_story.section_3', lang)}</p>
            <h3>{t('about.nowadays.title', lang)}</h3>
            <p>
              {t('about.nowadays.section_1', lang)}<br></br>
              {t('about.nowadays.section_2', lang)}
            </p>
            <h3>{t('about.passions.title', lang)}</h3>
            <p>{t('about.passions.section_1', lang)}</p>
          </div>
        </div>
      </section>

      {/* <!-- PROJECTS --> */}
      <section className={styles.projects}>
        <div className={styles.title_section}>
          <h1>{t('projects.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        {/* <!-- FILTER --> */}
        <div className={styles.filters}>
          <div className={styles.filter_active}>ALL</div>
          <div className={styles.filter}>REACT</div>
          <div className={styles.filter}>GATSBY</div>
          <div className={styles.filter}>JS/EXPRESS</div>
        </div>

        <div className={styles.projects_container}>

          {projectsData.slice(initial, last).map(elem => (
            <div className={styles.card}>
              <div className={styles.project_image_container}>
                <Img
                  className={styles.project_image}
                  fixed={projects.edges.find(img => img.node.childImageSharp.fixed.src.indexOf(elem.image) > 1).node.childImageSharp.fixed}
                  alt={t(elem.title, lang)} />

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
      <section className={styles.contact}>
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
