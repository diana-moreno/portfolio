import React from "react"
import { Link } from "gatsby"
import styles from './project.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Navbar from '../components/Navbar'
import GatsbyIcon from '../assets/gatsby_icon.svg'
import ReactIcon from '../assets/react_icon.svg'
import GithubIcon from '../assets/github.svg'
import Footer from '../components/Footer'


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
  const calculatorURL = projects.edges[10].node.publicURL
  return (
    <Layout>
      <Navbar />
      <section className={styles.project_container}>


        <div className={styles.project_container_side}>
          <div className={styles.title_section}>
            <div class={styles.project_title_container}>
              <h1>Calculator</h1>
              <div className={styles.title_section_line}></div>
            </div>
            <p className={styles.date}>June 2019</p>
          </div>
          <div className={styles.project_image_wrap}>
            <img className={styles.project_detail_image} src={calculatorURL} />
          </div>

          <p>In this project, I made a functional calculator. The purpose was to practice with the mix of CSS, HTML, the DOM, logic Javascript and mouse and keyboard events.</p>
    
        <div className={styles.container}>
          <div className={styles.icons_container}>
            <p><strong>Source code</strong></p>
            <a href="https://github.com/diana-moreno/calculator-basic" target="_blank">
              <GithubIcon className={styles.technologies_icon} />
            </a>
          </div>
        </div>

        </div>



        <div className={styles.project_container_side}>
          <div className={styles.try_demo}>
            <h3>Do you want to try a demo?</h3>
            <button className={styles.button_demo}>Open demo</button>
          </div>

          <div className={styles.tab_box}>
            <ul className={styles.tab_box_menu}>
              <li><strong>FEATURES</strong></li>
              <li className={styles.tab_box_menu_inactive}><strong>LEARNED</strong></li>
              <li className={styles.tab_box_menu_inactive}><strong>TECHNOLOGIES</strong></li>
            </ul>

            <ul className={styles.tab_box_content}>
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

        {/* <button className={styles.button}>Open project</button> */}


        {/* <div className={styles.project_text}>
            </div>
            <div className={styles.project_text}>
              <ul>
                <li>Create a visual interface with CSS Grid Layout.</li>
                <li>Access and manipulate the DOM.</li>
                <li>Apply keyboard and mouse events.</li>
                <li>How to implement hover and active to change style.</li>
              </ul>
            </div>
            <div className={styles.project_text}>
              <div className={styles.technologies_container}>
                <GatsbyIcon className={styles.technologies_icon} />
                <ReactIcon className={styles.technologies_icon} />
              </div>
            </div>
   */}

      </section>
      <Footer />
    </Layout>
  )
}

export default SecondPage
