import React from "react"
import MainHero from "../components/MainHero"
import StepsToJoin from "../components/StepsToJoin"
import {graphql } from "gatsby"

import Layout from "../layout"

const Home = ({ data }) => {

  console.log(data)
  return (
    <Layout>
      <MainHero bgImage={data.mainBg} />
      <StepsToJoin />
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
  }
`
