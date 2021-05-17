import React from "react"
import MainHero from "../components/Mainhero"
import StepsToJoin from "../components/StepsToJoin"
import ImageWithBtn from "../components/ImageWithBtn"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from "../layout"

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <MainHero bgImage={data.mainBg} />
      <StepsToJoin />
      <ImageWithBtn
        bgImage={data.footerBg}
        btnText="About us"
        btnUrl="/about"
      />
    </Layout>
  )
}

export default Home

export const mainQ = graphql`
  query {
    mainBg: file(relativePath: { eq: "main-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2100)
      }
    }
    footerBg: file(relativePath: { eq: "footer-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2100)
      }
    }
  }
`
