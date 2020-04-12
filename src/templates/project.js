import React from "react"
import styles from './project.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Menu from '../components/Menu'
import GithubIcon from '../assets/github.svg'
import Img from 'gatsby-image'
import projectsData from '../data/projects'
import { t } from '../i18n'
import Languages from "../components/Languages"

const ProjectPage = ({ data, pageContext, location }) => {
  const { projects, seoJson } = data
  const { projectName, lang } = pageContext

  const seoData = {
    lang: lang,
    url: seoJson.url,
    titleSeo: seoJson.title,
    description: seoJson.description,
    alternateLanguage: seoJson.alternateLanguage,
    alternateUrl: seoJson.alternateUrl,
  }

  const imageProject = projects.edges.find(elem => elem.node.name === projectName).node.childImageSharp.fluid

  const projectIndex = projectsData.indexOf(projectsData.find(elem => elem.image === projectName))
  const currentProject = projectsData[projectIndex]

  return (
    <Layout seoData={seoData}>
      <Languages location={location} lang={lang} />
      <Menu lang={lang} />
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
                {currentProject.features.map((elem, i) =>
                  <li 
                    key={i} 
                    className={elem.underline ? styles.underline : ''}
                  >{t(elem.text, lang)}
                  </li>
                )}
              </ul>
            </div>
            <div className={styles.text_container}>
              <p><strong>{t('projects.learned', lang)}</strong></p>
              <ul>
                {currentProject.learned.map((elem, i) => 
                  <li key={i}>{t(elem, lang)}</li>)
                }
              </ul>
            </div>
            <div className={styles.text_container}>
              <p><strong>{t('projects.technologies', lang)}</strong></p>
              <ul>
                {currentProject.technologies.map((elem, i) => 
                  <li key={i}>{t(elem, lang)}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = () => graphql`
  query ProjectsQuery($lang: String!, $projectName: String!) {
    seoJson(lang: { eq: $lang }, name: { eq: $projectName }) {
      url
      title
      description
      alternateLanguage
      alternateUrl
    },
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
`

export default ProjectPage
