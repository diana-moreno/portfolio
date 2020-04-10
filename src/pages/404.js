import React from "react"
import Layout from "../components/Layout"
import styles from './notFound.module.scss'
// import SEO from "../components/seo"

const NotFoundPage = () => (
  // <Layout>
  <div className={styles.not_found}>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.bubble}></div>
    <div className={styles.text_404}>
      <h1>404</h1>
      <p>Oops! Something went wrong.</p>
      <button type="button">Go home</button>
    </div>
  </div>
  // </Layout>
)

export default NotFoundPage
