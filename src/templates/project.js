import React from "react"
import styles from './project.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import GithubIcon from '../assets/github.svg'
import Img from 'gatsby-image'
import projectsData from '../data/projects'
import { t } from '../i18n'

const lang = 'en'

const ProjectPage = ({ path }) => {
  const projectName = path.split('').splice(1).join('')

  const { projects } = useStaticQuery(graphql`
  query {
    projects: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
        edges {
          node {
            name
            publicURL,
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  }
`)
  // const calculatorURL = projects.edges[10].node.publicURL

  const urlProject = projects.edges.find(img => img.node.childImageSharp.fluid.src.indexOf(projectName) > 1).node.childImageSharp.fluid


  const projectIndex = projectsData.indexOf(projectsData.find(elem => elem.image === projectName))
  const currentProject = projectsData[projectIndex]
  
  console.log(currentProject)
  
  return (
    <Layout>
      <Navbar />
      <div className={styles.title_section}>
        <div className={styles.project_title_container}>
          <h1>{t(currentProject.title, lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
      </div>
      <div className={styles.project_container}>
        <div className={styles.project_container_side}>
          <div className={styles.project_image_container}>
            <p>June 2019</p>
            {/* FALTA DATE EN I18N */}
            <Img fluid={urlProject} />
          </div>
          <p className={styles.description}>
            {t(currentProject.main, lang)}
          </p>
          <div className={styles.buttons_container}>
            <div>
              <p><strong>{t('projects.source_code', lang)}</strong></p>
              <a target="_blank" rel="noopener noreferrer" href={t(currentProject.github_link, lang)}>
                <GithubIcon className={styles.technologies_icon} />
              </a>
            </div>
            <div>
              <p><strong>{t('projects.demo', lang)}</strong></p>
              <a target="_blank" rel="noopener noreferrer" className={styles.button_demo} href={t(currentProject.project_link, lang)}>Open demo</a>
            </div>
          </div>
        </div>
        <div className={styles.project_container_side}>
          <div className={styles.text_container}>
            <p><strong>{t('projects.features', lang)}</strong></p>
            <ul>
              {currentProject.features.map(elem => <li>{t(elem, lang)}</li>)}
            </ul>
          </div>
          <div className={styles.text_container}>
            <p><strong>{t('projects.learned', lang)}</strong></p>
            <ul>
              {currentProject.learned.map(elem => <li>{t(elem, lang)}</li>)}
            </ul>
          </div>
          <div className={styles.text_container}>
            <p><strong>{t('projects.technologies', lang)}</strong></p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
