import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import ArrowBounce from '../ArrowBounce'
import { t } from '../../i18n'
import allUrls from '../../urls/allUrls'
import PropTypes from 'prop-types'
import Typewriter from 'typewriter-effect'

const Home = ({ lang, homeRef }) => {
  return (
    <section ref={homeRef} id={t('home.ref', lang)} className={styles.home}>
      <div className={styles.greeting}>
        {t('home.greeting', lang)}
        <span className={styles.greeting__name}>{t('home.author', lang)}</span>.
        <br></br>
        <Typewriter
          options={{
            strings: [
              `${t('home.author_position', lang)}`,
              `${t('home.creative', lang)}`,
              `${t('home.design', lang)}`,
              `${t('home.develop', lang)}`
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 0,
            delay: 90
          }}
        />
      </div>
      <div className={styles.more}>
        <Link
          aria-label={t('accessibility.more', lang)}
          to={allUrls[2][`url_${lang}`]}
        >
          <ArrowBounce />
        </Link>
      </div>
    </section>
  )
}

Home.propTypes = {
  lang: PropTypes.string.isRequired,
  homeRef: PropTypes.shape({ current: PropTypes.any })
}

export default Home
