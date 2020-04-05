import React, { useState } from "react"
import styles from './index.module.scss'
import { t } from '../../i18n'
import { Link } from 'gatsby'

const Navbar = ({ lang, indexMenu }) => {

  // console.log(indexMenu)

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={indexMenu === 0 ? styles.active : ''}>
          <Link to="/#home">{t('home.title', lang)}</Link>
        </li>
        <li className={indexMenu === 1 ? styles.active : '' }>
          <Link to="/#about">{t('about.title', lang)}</Link>
        </li>
        <li className={indexMenu === 2 ? styles.active : ''}>
          <Link to="/#projects">{t('projects.title', lang)}</Link>
        </li>
        <li className={indexMenu === 3 ? styles.active : ''}>
          <Link to="/#contact">{t('contact.title', lang)}</Link>
        </li>
      </ul>
      <i className="mdi mdi-menu"></i>
    </nav>
)}

export default Navbar