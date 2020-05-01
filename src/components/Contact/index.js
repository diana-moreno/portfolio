import React from 'react'
import styles from './index.module.scss'
import WhiteTriangle from '../../assets/white_triangle.svg'
import Form from '../Form'
import { t } from '../../i18n'
import PropTypes from 'prop-types'

const Contact = ({ lang, contactRef }) => {
  return (
    <section
      ref={contactRef}
      id={t('contact.ref', lang)}
      className={styles.contact}
    >
      <div className={styles.title_section}>
        <h1>{t('contact.title', lang)}</h1>
        <div className={styles.title_section_line}></div>
      </div>
      <WhiteTriangle className={styles.white_triangle} />
      <Form lang={lang} />
    </section>
  )
}

Contact.propTypes = {
  lang: PropTypes.string.isRequired,
  contactRef: PropTypes.shape({ current: PropTypes.any })
}

export default Contact
