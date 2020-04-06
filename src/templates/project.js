import React from "react"
import styles from './project.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import GithubIcon from '../assets/github.svg'
import Img from 'gatsby-image'
import projectsData from '../data/projects'
import { t } from '../i18n'
import Languages from "../components/Languages"


const ProjectPage = ({ pageContext }) => {
  const { projectName, lang } = pageContext

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

  const imageProject = projects.edges.find(elem => elem.node.name === projectName).node.childImageSharp.fluid
  
  const projectIndex = projectsData.indexOf(projectsData.find(elem => elem.image === projectName))
  const currentProject = projectsData[projectIndex]

  return (
    <Layout>
      <Languages />
      <Navbar lang={lang} />
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
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={currentProject.github_link}
              >
                <GithubIcon className={styles.technologies_icon} />
              </a>
            </div>
            <div>
              <p><strong>{t('projects.demo', lang)}</strong></p>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.button_demo} 
                href={currentProject.project_link}
              >{t('projects.view', lang)}</a>
            </div>
          </div>
        </div>
        <div className={`${styles.project_container_side} ${styles.project_container_side_right}`}>
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
