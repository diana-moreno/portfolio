import React from "react"
import styles from './index.module.scss'
import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import EmailIcon from '../../assets/email.svg'
import { t } from '../../i18n'

const Footer = ({ lang }) => {
  return (
    <footer>
      <div className={styles.social}>
        <a 
          aria-label={t('accessibility.github', lang)} 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/diana-moreno"
          ><GithubIcon />
        </a>
        <a 
          aria-label={t('accessibility.linkedin', lang)} 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.linkedin.com/in/diana-moreno-arranz"
          ><LinkedinIcon />
        </a>
        <a
          aria-label={t('accessibility.email', lang)} 
          href="mailto:d7@hotmail.es"><EmailIcon /></a>
      </div>
      <p className={styles.footer_text}>Diana Moreno, 2020</p>
    </footer>
  )
}

export default Footer

