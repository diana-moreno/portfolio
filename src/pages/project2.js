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
  const calculatorURL = projects.edges[0].node.publicURL
  return (
    <Layout>
      <Navbar />
      <section className={styles.projects}>
        <div className={styles.title_section}>
          <h2>Calculator</h2>
          <div className={styles.title_section_line}></div>
        </div>

          <div className={styles.project_sections}>
            <div className={styles.project_section_left}>
              <h3>Overview</h3>
            </div>
            <div className={styles.project_section_right}>
              <p>In this project, I made a functional calculator. The purpose was to practice with the mix of CSS, HTML, the DOM, logic Javascript and mouse and keyboard events.</p>
            </div>
          </div>
          <div className={styles.project_sections}>
            <div className={styles.project_image}>
              <img className={styles.project_image} src={calculatorURL} />
              <button className={styles.project_details}>RUN PROJECT</button>
            </div>
            <div className={styles.project_image}>
              <img className={styles.project_image} src={calculatorURL} />
              <button className={styles.project_details}>RUN PROJECT</button>
            </div>
            <div className={styles.project_image}>
              <img className={styles.project_image} src={calculatorURL} />
              <button className={styles.project_details}>RUN PROJECT</button>
            </div>
          </div>
         

          <div className={styles.project_sections}>
            <div className={styles.project_section_left}>
              <h3>Features</h3>
            </div>
            <div className={styles.project_section_right}>
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
          </div>
          <div className={styles.project_sections}>
            <div className={styles.project_section_left}>
              <h3>What I learned</h3>
            </div>
            <div className={styles.project_section_right}>
              <ul>
                <li>Create a visual interface with CSS Grid Layout.</li>
                <li>Access and manipulate the DOM.</li>
                <li>Apply keyboard and mouse events.</li>
                <li>How to implement hover and active to change style.</li>
              </ul>
            </div>
          </div>
           <div className={styles.project_sections}>
            <div className={styles.project_section_left}>
              <h3>Source code</h3>
            </div>
            <div className={styles.project_section_right}>
              <a href="https://github.com/diana-moreno/calculator-basic" target="_blank">
                <React_icon className={styles.technologies_icon} />
              </a>
            </div>
          </div>
          <div className={styles.project_sections}>
            <div className={styles.project_section_left}>
              <h3>Technologies</h3>
            </div>
            <div className={styles.project_section_right}>
              <div className={styles.technologies_container}>
                <Gatsby_icon className={styles.technologies_icon} />
                <React_icon className={styles.technologies_icon} />
              </div>
            </div>
          </div>
          <div className={styles.project_sections}>
          <div className={styles.project_section_left}>
            <h3>Date</h3>
          </div>
          <div className={styles.project_section_right}>
            <p>June 2019</p>
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
