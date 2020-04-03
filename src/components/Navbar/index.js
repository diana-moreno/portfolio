import React from "react"
import styles from './index.module.scss'
import { t } from '../../i18n'

const Navbar = ({ lang }) => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
<li className="page-link" dest="home">{t('home.title', lang)}</li>
      <li className="page-link" dest="about">{t('about.title', lang)}</li>
      <li className="page-link active" dest="projects">{t('projects.title', lang)}</li>
      <li className="page-link" dest="contact">{t('contact.title', lang)}</li>
    </ul>
    <i className="mdi mdi-menu"></i>
  </nav>
)

export default Navbar