import React from "react"
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"
import sent from '../../gifs/sent.gif'
import PropTypes from "prop-types"

const Confirmation = ({ lang }) => {
return (
  <div className={styles.success}>
    <img src={sent} alt='animation email sent'/>
    <h1>{t('confirmation.title', lang)}</h1>
    <div className={styles.title_section_line}></div>
    <p>{t('confirmation.message_1', lang)}<br></br>{t('confirmation.message_2', lang)}</p>
    <Link 
      className={styles.goBack} 
      to={allUrls[1][`url_${lang}`]}
      >{t('confirmation.button_back', lang)}
    </Link>
  </div>
)}

Confirmation.propTypes = {
  lang: PropTypes.string.isRequired
}
export default Confirmation
