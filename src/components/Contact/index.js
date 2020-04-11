import React from "react"
import styles from '../../pages/index.module.scss'
import WhiteTriangle from '../../assets/white_triangle.svg'
import Form from '../Form'
import { t } from '../../i18n'

const Contact = ({ lang, contactRef }) => {
  return (
    <section ref={contactRef} id='contact' className={styles.contact}>
      <div className={styles.title_section}>
        <h1>{t('contact.title', lang)}</h1>
        <div className={styles.title_section_line}></div>
      </div>
      <WhiteTriangle className={styles.white_triangle} />
      <Form lang={lang} />
    </section>
  )
}

export default Contact