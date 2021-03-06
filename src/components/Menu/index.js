import React, { useState } from 'react'
import styles from './index.module.scss'
import { t } from '../../i18n'
import { Link } from 'gatsby'
import allUrls from '../../urls/allUrls'
import PropTypes from 'prop-types'

const Menu = ({ lang, indexMenu }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    return openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  return (
    <>
      {/* MENU DESKTOP */}
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={indexMenu === 0 ? styles.active : ''}>
            <Link
              aria-label={t('accessibility.home', lang)}
              to={allUrls[1][`url_${lang}`]}
            >
              {t('home.title', lang)}
            </Link>
          </li>
          <li className={indexMenu === 1 ? styles.active : ''}>
            <Link
              aria-label={t('accessibility.about', lang)}
              to={allUrls[2][`url_${lang}`]}
            >
              {t('about.title', lang)}
            </Link>
          </li>
          <li className={indexMenu === 2 ? styles.active : ''}>
            <Link
              aria-label={t('accessibility.projects', lang)}
              to={allUrls[3][`url_${lang}`]}
            >
              {t('projects.title', lang)}
            </Link>
          </li>
          <li className={indexMenu === 3 ? styles.active : ''}>
            <Link
              aria-label={t('accessibility.translations', lang)}
              to={allUrls[4][`url_${lang}`]}
            >
              {t('translations.title', lang)}
            </Link>
          </li>
          <li className={indexMenu === 4 ? styles.active : ''}>
            <Link
              aria-label={t('accessibility.contact', lang)}
              to={allUrls[5][`url_${lang}`]}
            >
              {t('contact.title', lang)}
            </Link>
          </li>
        </ul>
      </nav>

      {/* MENU MOBILE */}
      <nav
        className={
          openMenu ? styles.menu_hamburger_fixed : styles.menu_hamburger
        }
      >
        <button
          aria-label={'menu-button'}
          onClick={toggleMenu}
          className={`${styles.hamburger} ${styles.hamburger__spin} ${
            openMenu ? styles.is_active : ''
          }`}
          type="button"
        >
          <span className={styles.hamburger_box}>
            <span
              className={`${styles.hamburger_inner_contrast}
              ${styles.white_hamburguer}`}
            ></span>
          </span>
        </button>
        {openMenu && (
          <ul className={styles.menu_hamburger_list}>
            <li className={indexMenu === 0 ? styles.active : ''}>
              <Link
                aria-label={t('accessibility.home', lang)}
                onClick={toggleMenu}
                to={allUrls[1][`url_${lang}`]}
              >
                {t('home.title', lang)}
              </Link>
            </li>
            <li className={indexMenu === 1 ? styles.active : ''}>
              <Link
                aria-label={t('accessibility.about', lang)}
                onClick={toggleMenu}
                to={allUrls[2][`url_${lang}`]}
              >
                {t('about.title', lang)}
              </Link>
            </li>
            <li className={indexMenu === 2 ? styles.active : ''}>
              <Link
                aria-label={t('accessibility.projects', lang)}
                onClick={toggleMenu}
                to={allUrls[3][`url_${lang}`]}
              >
                {t('projects.title', lang)}
              </Link>
            </li>
            <li className={indexMenu === 3 ? styles.active : ''}>
              <Link
                aria-label={t('accessibility.translations', lang)}
                onClick={toggleMenu}
                to={allUrls[4][`url_${lang}`]}
              >
                {t('translations.title', lang)}
              </Link>
            </li>
            <li className={indexMenu === 4 ? styles.active : ''}>
              <Link
                aria-label={t('accessibility.contact', lang)}
                onClick={toggleMenu}
                to={allUrls[5][`url_${lang}`]}
              >
                {t('contact.title', lang)}
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}

Menu.propTypes = {
  lang: PropTypes.string.isRequired,
  indexMenu: PropTypes.number
}

export default Menu
