import React from "react"
import { Link } from "gatsby"
import styles from './project.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Navbar from '../components/Navbar'
import GithubIcon from '../assets/github.svg'


const ProjectPage = () => {
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
  const calculatorURL = projects.edges[10].node.publicURL

  return (
    <Layout>
      <Navbar />
      <div className={styles.title_section}>
        <div class={styles.project_title_container}>
          <h1>Calculator</h1>
          <div className={styles.title_section_line}></div>
        </div>
      </div>
      <div className={styles.project_container}>
        <div className={styles.project_container_side}>
          <div className={styles.project_image_container}>
            <p>June 2019</p>
            <img src={calculatorURL} />
          </div>
          <p>In this project, I made a functional calculator. The purpose was to practice with the mix of CSS, HTML, the DOM, logic Javascript and mouse and keyboard events.</p>
          <div className={styles.buttons_container}>
            <div>
              <p><strong>Source code</strong></p>
              <a href="https://github.com/diana-moreno/calculator-basic" target="_blank">
                <GithubIcon className={styles.technologies_icon} />
              </a>
            </div>
            <div>
              <p><strong>Demo</strong></p>
              <button className={styles.button_demo}>Open demo</button>
            </div>
          </div>
        </div>
        <div className={styles.project_container_side}>
          <div className={styles.text_container}>
            <p><strong>Features</strong></p>
            <ul>
              <li>There's a button to delete the last character introduced.</li>
              <li>Includes reset button to start new calculations.</li>
              <li>It's able to acummulate values for the next operation.</li>
              <li>If the expression is malformed, shows a message.</li>
              <li>If the expression is too long, the font size is reduced to fit in display.</li>
              <li>Has intuitive colors when operating to be easily to use.</li>
              <li>Works properly both with keyboard and mouse.</li>
              <li>If the expression is too long, the font size is reduced to fit in display.</li>
              <li>Has intuitive colors when operating to be easily to use.</li>
              <li>Works properly both with keyboard and mouse.</li>
            </ul>
          </div>
          <div className={styles.text_container}>
            <p><strong>What I learned</strong></p>
            <ul>
              <li>Create a visual interface with CSS Grid Layout.</li>
              <li>Access and manipulate the DOM.</li>
              <li>Apply keyboard and mouse events.</li>
              <li>How to implement hover and active to change style.</li>
              <li>Create a visual interface with CSS Grid Layout.</li>
              <li>Access and manipulate the DOM.</li>
              <li>Apply keyboard and mouse events.</li>
              <li>How to implement hover and active to change style.</li>
            </ul>
          </div>
          <div className={styles.text_container}>
            <p><strong>Technologies</strong></p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
