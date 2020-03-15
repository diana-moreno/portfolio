import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './styles.module.scss'
import Navbar from '../components/Navbar'
import DoubleArrowDown from '../assets/double_arrow_down.svg'
import ArrowBounce from '../components/ArrowBounce'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
      {/* <!-- HOME --> */}
      <section className={styles.home}>
        <div className={styles.greeting}>
          Hello, I'm <span className={styles.greeting__name}>Diana Moreno</span>.
          <br></br>
          I'm Full Stack Web Developer.
        </div>
        <div className={styles.more} dest="about">
          <p>View more</p>
          {/* <DoubleArrowDown /> */}
          <ArrowBounce />
        </div>
      </section>
      <Navbar />
      <section>
      
      </section> 

  </Layout>
)

export default IndexPage
