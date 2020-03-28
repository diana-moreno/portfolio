import React from "react"
import styles from '../../pages/index.module.scss'
import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import EmailIcon from '../../assets/email.svg'

const Footer = ({ urls, lang }) => {
  return (
    <footer>
      {/* TODO LINKS */}
      <div className={styles.social}>
        <GithubIcon />
        <LinkedinIcon />
        <EmailIcon />
      </div>
      <p className={styles.footer_text}>Diana Moreno, 2020</p>
    </footer>
  )
}

export default Footer

