import React, { useState } from "react"
import styles from './index.module.scss'
import { t } from '../../i18n'
import { Link } from 'gatsby'
import allUrls from "../../urls/allUrls"

const Navbar = ({ lang, indexMenu }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={indexMenu === 0 ? styles.active : ''}>
          <Link to={allUrls[1][`url_${lang}`]}>{t('home.title', lang)}</Link>
        </li>
        <li className={indexMenu === 1 ? styles.active : '' }>
          <Link to={allUrls[2][`url_${lang}`]}>{t('about.title', lang)}</Link>
        </li>
        <li className={indexMenu === 2 ? styles.active : ''}>
          <Link to={allUrls[3][`url_${lang}`]}>{t('projects.title', lang)}</Link>
        </li>
        <li className={indexMenu === 3 ? styles.active : ''}>
          <Link to={allUrls[4][`url_${lang}`]}>{t('contact.title', lang)}</Link>
        </li>
      </ul>
      <i className="mdi mdi-menu"></i>
    </nav>
)}

export default Navbar