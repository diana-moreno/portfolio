import React from "react"
import { Link } from "gatsby"
import styles from './styles.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Navbar from '../components/Navbar'
import Gatsby_icon from '../assets/gatsby_icon.svg'
import React_icon from '../assets/react_icon.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Email from '../assets/email.svg'

const SecondPage = () => {
  const { projects } = useStaticQuery(graphql`
  query {
    projects: allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`)
  const calculatorURL = projects.edges[13].node.publicURL
  return (
    <Layout>
      <Navbar />
      <section>
        <div className={styles.title_section}>
          <h1>Calculator</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.project_container}>
          <div className={styles.project_container_side}>
            <div className={styles.project_image_wrap}>
              <img className={styles.project_detail_image} src={calculatorURL} />
              {/* <button className={styles.project_run}>RUN PROJECT</button> */}
            </div>
            <p>In this project, I made a functional calculator. The purpose was to practice with the mix of CSS, HTML, the DOM, logic Javascript and mouse and keyboard events.</p>
            <p><strong>Source code</strong></p>
            <a href="https://github.com/diana-moreno/calculator-basic" target="_blank">
              <React_icon className={styles.technologies_icon} />
            </a>
            <p><strong>Technologies</strong></p>
            <div className={styles.technologies_container}>
              <Gatsby_icon className={styles.technologies_icon} />
              <React_icon className={styles.technologies_icon} />
            </div>
          </div>
          <div className={styles.project_container_side}>
            <div className={styles.project_text}>
              <p><strong>Features</strong></p>
              <ul>
                <li>There's a button to delete the last character introduced.</li>
                <li>Includes reset button to start new calculations.</li>
                <li>It's able to acummulate values for the next operation.</li>
                <li>If the expression is malformed, shows a message.</li>
                <li>If the expression is too long, the font size is reduced to fit in display.</li>
                <li>Has intuitive colors when operating to be easily to use.</li>
                <li>Works properly both with keyboard and mouse.</li>
              </ul>
            </div>
            <div className={styles.project_text}>
              <p><strong>What I learned</strong></p>
              <ul>
                <li>Create a visual interface with CSS Grid Layout.</li>
                <li>Access and manipulate the DOM.</li>
                <li>Apply keyboard and mouse events.</li>
                <li>How to implement hover and active to change style.</li>
              </ul>
            </div>
            <div className={styles.project_text}>
              <p><strong>Date</strong></p>
              <p>June 2019</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.social}>
          <Github />
          <Linkedin />
          <Email />
        </div>
        <p className={styles.footer_text}>Diana Moreno, 2020</p>
      </footer>
    </Layout>
  )
}

export default SecondPage
