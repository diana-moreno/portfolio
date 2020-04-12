import React from "react"
import styles from './index.module.scss'
import ConceptKey from '../ConceptKey'
import conceptsKey from '../../data/concepts_key'
import { t } from '../../i18n'
import CvIcon from '../../assets/curriculum-vitae.svg'
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const About = ({ lang, aboutRef, imageProfile, curriculum }) => {
  return (
    <>
      <section ref={aboutRef} id={t('about.ref', lang)} className={styles.about}>
        <div className={styles.title_section}>
          <h1>{t('about.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.circles_container}>
          {
            conceptsKey.map(concept =>
              <ConceptKey
                key={concept.title}
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
          <Img 
            className={styles.aboutme_image}
            alt='Profile photography'  
            fluid={imageProfile} 
          />
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
    </>
  )
}

About.propTypes = {
  lang: PropTypes.string.isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.any }),
  imageProfile: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired
}

export default About