import React from "react"
import { Link } from "gatsby"
import styles from './styles.module.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>

    {/* <SEO title="Page two" /> */}
    <div className={styles.success}>
      <h1>Thank you!</h1>
      <div className={styles.title_section_line}></div>
      <p>Your message has been successfully sent.<br></br> I will contact you very soon!</p>
      <Link className={styles.goBack} to="/">Go back</Link>
    </div>
  </Layout>
)

export default SecondPage
