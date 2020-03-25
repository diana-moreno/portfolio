import React from "react"
import { Link } from "gatsby"
import styles from '../../pages/styles2.module.scss'
import { t } from '../../i18n';


const ConceptKey = ({ title, description, icon, lang }) => {
  return (
    <div className={styles.circle_container}>
      <div className={styles.circle}>
        {React.createElement(icon, { className: styles.responsive_icon})}
      </div>
      <div className={styles.circle_text}>
        <h3>{t(title, lang)}</h3>
        <p>{t(description, lang)}</p>
      </div>
    </div>
  )
}

export default ConceptKey
