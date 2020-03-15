import React from "react"
import styles from './index.module.scss'

const Navbar = () => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
      <li className="page-link" dest="home">HOME</li>
      <li className="page-link" dest="about">ABOUT</li>
      <li className="page-link active" dest="portfolio">PORTFOLIO</li>
      <li className="page-link" dest="contact">CONTACT</li>
    </ul>
    <i className="mdi mdi-menu"></i>
  </nav>
)

export default Navbar