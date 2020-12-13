import React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/resuable/HeroSection"
import Infoblock from '../components/resuable/Infoblock'
//import DualInfo from '../components/resuable/DualInfo'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/resuable/ContactForm'

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact us"
      subtitle=""
      heroclass="about-background"
    />
   
    <Infoblock heading="How can we help ?"/>
   <ContactForm/>
    
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
