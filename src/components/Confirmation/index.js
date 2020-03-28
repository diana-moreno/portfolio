import React from "react"
import { Link } from "gatsby"
import styles from '../../pages/index.module.scss'
import { t } from '../../i18n';

const Confirmation = ({ urls, lang }) => {
  return (
    <>
    <div className={styles.success}>
      <h1>{t('confirmation.title', lang)}</h1>
      <div className={styles.title_section_line}></div>
      <p>{t('confirmation.message_1', lang)}<br></br>{t('confirmation.message_2', lang)}</p>
      <Link className={styles.goBack} to="/">{t('confirmation.button_back', lang)}</Link>
      {/* TODO */}
    </div>
    </>
)}

export default Confirmation
