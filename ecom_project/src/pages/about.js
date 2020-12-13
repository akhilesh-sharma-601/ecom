import React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/resuable/HeroSection"
import Infoblock from '../components/resuable/Infoblock'
import DualInfo from '../components/resuable/DualInfo'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from '../components/about/Teams'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Any project in mind"
      subtitle=""
      heroclass="about-background"
    />
    <DualInfo heading="Messege from CEO" />
    <Infoblock heading="About Vision"/>
    <Team/>
    
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
