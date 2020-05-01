import React, { useState } from 'react'
import styles from './index.module.scss'
import Img from 'gatsby-image'
import { t } from '../../i18n'
import projectsData from '../../data/projects.js'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'

const Projects = ({ lang, projectsRef, projectsImg }) => {
  const [currentFilter, setCurrentFilter] = useState('all')
  const handleFilter = filter => {
    setCurrentFilter(filter)
  }

  return (
    <section
      ref={projectsRef}
      id={t('projects.ref', lang)}
      className={styles.projects}
    >
      <div>
        <div className={styles.title_section}>
          <h1>{t('projects.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.filters}>
          <div
            onClick={() => handleFilter('all')}
            className={
              currentFilter === 'all'
                ? `${styles.filter} ${styles.filter_active}`
                : styles.filter
            }
          >
            {t('projects.all', lang)}
          </div>
          <div
            onClick={() => handleFilter('react')}
            className={
              currentFilter === 'react'
                ? `${styles.filter} ${styles.filter_active}`
                : styles.filter
            }
          >
            REACT
          </div>
          <div
            onClick={() => handleFilter('node')}
            className={
              currentFilter === 'node'
                ? `${styles.filter} ${styles.filter_active}`
                : styles.filter
            }
          >
            NODE
          </div>
          <div
            onClick={() => handleFilter('javascript')}
            className={
              currentFilter === 'javascript'
                ? `${styles.filter} ${styles.filter_active}`
                : styles.filter
            }
          >
            JS/HTML
          </div>
        </div>
        <div className={styles.projects_container}>
          {projectsData.map(elem => {
            if (elem.technology.includes(currentFilter)) {
              return (
                <Zoom key={elem.project} clear exit="true">
                  <div className={styles.card}>
                    <div className={styles.project_image_container}>
                      <a
                        aria-label={t('accessibility.project_detail', lang)}
                        href={t(elem.url, lang)}
                        project={elem}
                      >
                        <Img
                          className={styles.project_image}
                          fixed={
                            projectsImg.edges.find(
                              img =>
                                img.node.childImageSharp.fixed.src.indexOf(
                                  elem.image
                                ) > 1
                            ).node.childImageSharp.fixed
                          }
                          alt={t(elem.title, lang)}
                        />
                      </a>
                    </div>
                    <p className={styles.project_title}>
                      {t(elem.title, lang)}
                    </p>
                  </div>
                </Zoom>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  projectsRef: PropTypes.shape({ current: PropTypes.any }),
  projectsImg: PropTypes.object.isRequired
}

export default Projects
