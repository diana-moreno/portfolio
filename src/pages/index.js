import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
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
import WhiteTriangle from '../assets/white_triangle.svg'


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
      <div className={styles.languages}>
        <p><span>en</span><span> / </span><span>es</span><span> / </span><span>ca</span><span> / </span><span>de</span></p>
      </div>
      {/* <SEO title="Home" /> */}

      {/* <!-- HOME --> */}
      {/* <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div> */}
      <section id='home-container' className={styles.home}>
        <div className={styles.greeting}>
          Hello, I'm <span className={styles.greeting__name}>Diana Moreno</span>.
          <br></br>
          I'm a Full Stack Web Developer.
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
              <p>Procuro que mis proyectos se vean bien en todos los dispositivos aplicando el concepto de móvil primero. </p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Focus className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Simplicity</h3>
              <p>Apuesto por interfaces atractivas para el usuario pero sin perder la simplicidad. Menos es más.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Code className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Good practices</h3>
              <p>Aplico principios SOLID, de código limpio, construyo componentes reusables y entiendo la importancia de testear.</p>
            </div>
          </div>
          <div className={styles.circle_container}>
            <div className={styles.circle}>
              <Tendency className={styles.responsive_icon} />
            </div>
            <div className={styles.circle_text}>
              <h3>Latest technologies</h3>
              <p>Me intereso por las nuevas tecnologías y apuesto por estar siempre al día.</p>
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
              I am focused on Javascript and my tools are React, Gatsby, Node, SQL and Express.</p>
            <h3>Passions</h3>
            <p>Besides programming, I am dedicated to following a healthy lifestyle. I pay close attention to what I eat, and regularly exercise. Moreover, I love dancing, up to the point that I joined an amateur salsa dance company.</p>
          </div>
        </div>
      </section>



      {/* <!-- CONTACT --> */}
      <section className={styles.contact}>
        <div className={styles.title_section}>
          <h1>CONTACT</h1>
          <div className={styles.title_section_line}></div>
        </div>
        <WhiteTriangle className={styles.white_triangle}/>
        {/* <form className={styles.contact_form} action="mailto:d7@hotmail.es" method="post" enctype="multipart/form-data">
            <input placeholder="Name" type="text" name="name" required=""/>
            <input placeholder="Email" type="email" name="email" required=""/>
            <textarea placeholder="Your Message" type="text" name="message"></textarea>
            <div id="success">
              <div>
                Your message was sent successfully. Thanks!<span id="close" class="mdi mdi-close"></span>
              </div>
            </div>
            <input class="button" type="submit" id="submit" value="SUBMIT"/>
          </form> */}

<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" />
    </li>
  </ul>
</form>
      </section>

    </Layout>
  )
}

export default IndexPage
