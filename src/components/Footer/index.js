import React from "react"
import styles from '../../pages/index.module.scss'
import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import EmailIcon from '../../assets/email.svg'

const Footer = () => {
  return (
    <footer>
      <div className={styles.social}>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/diana-moreno"
        ><GithubIcon />
        </a>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.linkedin.com/in/diana-moreno-arranz"
        ><LinkedinIcon />
        </a>
        <a href="mailto:d7@hotmail.es"><EmailIcon /></a>
      </div>
      <p className={styles.footer_text}>Diana Moreno, 2020</p>
    </footer>
  )
}

export default Footer

