import React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/resuable/HeroSection"
import Infoblock from "../components/resuable/Infoblock"
import DualInfo from "../components/resuable/DualInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from '../components/cart/productCart'
import Team from '../components/about/Teams'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Ecom Express.com"
      subtitle="All You , Need Is Here "
      heroclass="hero-background"
    />
   
    <Product myproducts={data.myproducts} />
    <Infoblock heading="About Us" />
    <DualInfo heading="core values" />
    <Team/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    myproducts: allContentfulProducts {
      edges {
        node {
          id
          title
          price
          category
          description
          image {
            fixed(width: 120, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage




