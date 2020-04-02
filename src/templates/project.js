import React from "react"
import styles from './project.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import GithubIcon from '../assets/github.svg'
import Img from 'gatsby-image'
import projectsData from '../data/projects'
import { t } from '../i18n'

const lang = 'es'

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

  // const imageProject = projects.edges.find(img => img.node.childImageSharp.fluid.src.indexOf(projectName) > 1).node.childImageSharp.fluid

  const imageProject = projects.edges.find(elem => elem.node.name === projectName).node.childImageSharp.fluid

  const projectIndex = projectsData.indexOf(projectsData.find(elem => elem.image === projectName))
  const currentProject = projectsData[projectIndex]
  
  
  return (
    <Layout>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.title_section}>
          <div className={styles.project_title_container}>
            <h1>{t(currentProject.title, lang)}</h1>
            <div className={styles.title_section_line}></div>
          </div>
        </div>
        <div className={styles.project_container}>
        <div className={`${styles.project_container_side} ${styles.project_container_side_left}`}>
          <div className={styles.project_image_container}>
            <Img fluid={imageProject} />
          </div>
          <p className={styles.description}>
            {t(currentProject.main, lang)}
          </p>
          <div className={styles.buttons_container}>
            <div>
              <p><strong>{t('projects.source_code', lang)}</strong></p>
              <a target="_blank" rel="noopener noreferrer" href={currentProject.github_link}>
                <GithubIcon className={styles.technologies_icon} />
              </a>
            </div>
            <div>
              <p><strong>{t('projects.demo', lang)}</strong></p>
              <a target="_blank" rel="noopener noreferrer" className={styles.button_demo} href={currentProject.project_link}>Open demo</a>
            </div>
          </div>
        </div>
        <div className={styles.project_container_side}>
          <div className={styles.text_container}>
            <p><strong>{t('projects.features', lang)}</strong></p>
            <ul>
              {currentProject.features.map(elem =>
                <li className={elem.underline ? styles.underline : ''}>
                  {t(elem.text, lang)}
                </li>
              )}
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
              {currentProject.technologies.map(elem => <li>{t(elem, lang)}</li>)}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default ProjectPage