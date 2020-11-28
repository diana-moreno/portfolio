import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Slide from 'react-reveal/Slide'
import { t } from '../../i18n'
import styles from './index.module.scss'

const Translations = ({ lang, translationsRef, imageProfile }) => {
  return (
      <section
        ref={translationsRef}
        id={t('translations.ref', lang)}
        className={styles.translations}
      >
        <div className={styles.title_section}>
          <h1>{t('translations.title', lang)}</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <p className={styles.translations_introduction}>{t('translations.introduction', lang)}</p>
        <div className={styles.translations_main}>
          <Slide left>
            <div>
              <div className={styles.translations_image_container}>
              <a className={styles.translations_link} href="https://www.linkedin.com/in/yolanda-moreno-arranz/" target='_blank'>
                <Img
                  className={styles.translations_image}
                  alt={t('accessibility.image_profile', lang)}
                  fluid={imageProfile}
                />
                </a>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className={styles.translations_text_wrapper}>
              <p className={styles.translations_text}>
                {t('translations.text', lang)}
              </p>
              <p className={styles.translations_sign}><a className={styles.translations_link} href="https://www.linkedin.com/in/yolanda-moreno-arranz/" target='_blank'>- Yolanda Moreno</a></p>
            </div>
          </Slide>
        </div>
      </section>
  )
}

Translations.propTypes = {
  lang: PropTypes.string.isRequired,
  translationsRef: PropTypes.shape({ current: PropTypes.any }),
  imageProfile: PropTypes.object.isRequired,
}

export default Translations
