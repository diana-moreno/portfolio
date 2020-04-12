import React from "react"
import styles from './index.module.scss'
import { t } from '../../i18n';
import PropTypes from "prop-types"

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

ConceptKey.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
}

export default ConceptKey
