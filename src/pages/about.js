import React from "react"
import InnerHero from "../components/InnerHero"
import ImageWithBtn from "../components/ImageWithBtn"
import TextSection from "../components/TextSection"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from "../layout"

const About = ({ data }) => {
  return (
    <Layout>
      <Seo customTitle={'About | The Scarlet Scourge'}/>
      <InnerHero title="About us" />
      <TextSection />
      <ImageWithBtn bgImage={data.footerBg} btnText="Join us" btnUrl="/#join" />
    </Layout>
  )
}

export default About

export const aboutQ = graphql`
  query {
    footerBg: file(relativePath: { eq: "about-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2100)
      }
    }
  }
`
