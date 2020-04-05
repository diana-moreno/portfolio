import React from "react"
import styles from './index.module.scss'
import { t } from '../../i18n'
import { Link } from 'gatsby'

const Navbar = ({ lang }) => (
  <nav className={styles.menu}>
  <ul className={styles.menu__list}>
    <li className="page-link" dest="home">
      <Link to="/#home">{t('home.title', lang)}</Link>
    </li>
    <li>
      <Link to="/#about">{t('about.title', lang)}</Link>
    </li>
    <li>
      <Link to="/#projects">{t('projects.title', lang)}</Link>
    </li>
    <li>
      <Link to="/#contact">{t('contact.title', lang)}</Link>
    </li>
  </ul>
  <i className="mdi mdi-menu"></i>
</nav>
)

export default Navbar