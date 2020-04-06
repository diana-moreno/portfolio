import React from "react"
import styles from '../../pages/index.module.scss'

const Languages = () => {

  return (
    <div className={styles.languages}>
      <p><span className={styles.language_item}>en</span><span> / </span><span className={styles.language_item}>es</span><span> / </span><span className={styles.language_item}>ca</span><span> / </span><span className={styles.language_item}>de</span></p>
    </div>
  )
} 

export default Languages