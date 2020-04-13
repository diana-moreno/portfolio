import React from "react"
import { Link } from 'gatsby'
import styles from './index.module.scss'
import ArrowBounce from '../ArrowBounce'
import { t } from '../../i18n'
import allUrls from "../../urls/allUrls"
import PropTypes from "prop-types"
import Zoom from 'react-reveal/Zoom';

const Home = ({ lang, homeRef }) => {
  return (
    <section ref={homeRef} id={t('home.ref', lang)} className={styles.home}>
      <Zoom clear ssrReveal>
        <div className={styles.greeting}>
          {t('home.greeting', lang)}<span className={styles.greeting__name}>
            {t('home.author', lang)}</span>.
          <br></br>
          {t('home.author_position', lang)}
        </div>
      </Zoom>
      <div className={styles.more}>
        <p>{t('home.view_more', lang)}</p>
        <Link to={allUrls[2][`url_${lang}`]}>
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