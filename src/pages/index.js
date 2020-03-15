import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './styles.module.scss'
import Navbar from '../components/Navbar'
import ArrowBounce from '../components/ArrowBounce'
// import './background.sass'
import Responsive from '../assets/responsive.svg'
import Focus from '../assets/focus.svg'
import Light from '../assets/light.svg'
import Code from '../assets/code.svg'
import Tendency from '../assets/tendency.svg'
import { graphql, useStaticQuery } from 'gatsby'


const IndexPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const imageUrl = image.childImageSharp.fluid.src
  console.log(imageUrl)

  return (
    <Layout>
      {/* <SEO title="Home" /> */}

      {/* <!-- HOME --> */}
      {/* <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div> */}
      <section id='home-container' className={styles.home}>
        <div className={styles.greeting}>
          Hello, I'm <span className={styles.greeting__name}>Diana Moreno</span>.
          <br></br>
          I'm Full Stack Web Developer.
        </div>
        <div className={styles.more} dest="about">
          <p>View more</p>
          <ArrowBounce />
        </div>
      </section>
      <Navbar />

      {/* <!-- ABOUT --> */}
      <section className={styles.about}>
        <div className={styles.title_section}>
          <h1>ABOUT</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <div className={styles.circles_container}>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Responsive className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Responsiveness</h3>
              <p>Taking care the way it looks on devices with both large and small screens</p>
            </div>
          </div>
          {/* <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Light className={styles.responsive_icon}/>
            </div>
            <div className={styles.circle_text}>
            <h3>Intuitive</h3>
              <p>Websites user-friendly and easy to use.</p>
            </div>
          </div> */}
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Focus className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Simplicity</h3>
              <p>Nice design avoiding overdone it. Less is more.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Code className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Clean code</h3>
              <p>I understand the importance of the clean code and reusable components.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Tendency className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Latest technologies</h3>
              <p>Being technological update with the latest technologies.</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutme}>
          <div className={styles.aboutme_image_container}>
            <img className={styles.aboutme_image} alt='Profile photography' src={imageUrl} />
          </div>
          <div className={styles.aboutme_text}>
            <h3>My story</h3>
            <p>I obtained a Bachelor in Business Administration and Management at the University of Barcelona in 2012. Once I finished my studies, I took up a career path as Accountant, growing up until I became Team Manager.<br></br>
            Six years later, I realized that this path no longer fulfilled me. I needed a new challenge where I could keep on growing as a profesional.</p>
            <p>All signs were appointing to programming and I felt an irresistible need to explore this field so, the beginning of 2019, I quit my job and started learning by myself. From september-19 to december-19 I was enrolled in a programming bootcamp in Skylab to consolidate and expand my knowledge.</p>
            <h3>Nowadays</h3>
            <p>Curently, I'm working for Interficie: a company that develops custum ecommerce and creative solutions for a big companies.<br></br>
              I am focused on Javascript and my tools are React, Gatsby, Node, SQL and Express.<br></br>
              In my spare time, I enjoy learning new technologies and implementing personal projects like this web site.</p>
            <h3>Passions</h3>
            <p>Besides programming, I am dedicated to following a healthy lifestyle. I pay close attention to what I eat, and regularly exercise. Moreover, I love dancing, up to the point that I joined an amateur salsa dance company.</p>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
