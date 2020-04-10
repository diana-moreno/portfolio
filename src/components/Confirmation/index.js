import React from "react"
import { Link } from "gatsby"
import styles from '../../pages/index.module.scss'
import { t } from '../../i18n';
import allUrls from "../../urls/allUrls"

const Confirmation = ({ lang }) => (
    <div className={styles.success}>
      <h1>{t('confirmation.title', lang)}</h1>
      <div className={styles.title_section_line}></div>
      <p>{t('confirmation.message_1', lang)}<br></br>{t('confirmation.message_2', lang)}</p>
      <Link 
        className={styles.goBack} 
        to={allUrls[1][`url_${lang}`]}
      >{t('confirmation.button_back', lang)}</Link>
    </div>
)

export default Confirmation
