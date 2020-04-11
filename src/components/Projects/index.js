import React, { useState } from "react"
import styles from '../../pages/index.module.scss'
import Img from 'gatsby-image'
import { t } from '../../i18n'
import projectsData from '../../data/projects.js'
import PropTypes from "prop-types"

const Projects = ({ lang, projectsRef, projectsImg }) => {
  const [currentFilter, setCurrentFilter] = useState('all')
  const handleFilter = (filter) => {
    setCurrentFilter(filter)
  }

  return (
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
                <div key={elem.project} className={styles.card}>
                  <div className={styles.project_image_container}>
                    <a href={t(elem.url, lang)} project={elem} >
                      <Img
                        className={styles.project_image}
                        fixed={projectsImg.edges.find(img => img.node.childImageSharp.fixed.src.indexOf(elem.image) > 1).node.childImageSharp.fixed}
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
  )
}

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
  projectsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  projectsImg: PropTypes.object.isRequired
}


export default Projects