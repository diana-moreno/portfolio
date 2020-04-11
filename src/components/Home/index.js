import React from "react"
import { Link } from 'gatsby'
import styles from '../../pages/index.module.scss'
import ArrowBounce from '../ArrowBounce'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"

const Home = ({ lang, homeRef }) => {
  return (
    <section ref={homeRef} id='home' className={styles.home}>
      <div className={styles.greeting}>
        {t('home.greeting', lang)}<span className={styles.greeting__name}>
          {t('home.author', lang)}</span>.
        <br></br>
        {t('home.author_position', lang)}
      </div>
      <div className={styles.more} dest="about">
        <p>{t('home.view_more', lang)}</p>
        <Link to={allUrls[2][`url_${lang}`]}>
          <ArrowBounce />
        </Link>
      </div>
    </section>
  )
}

export default Home