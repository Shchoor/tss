import React from "react"
import Layout from "../layout"
import RosterMain2 from "../components/RosterMain2"
import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-top: 50px;
`   

const roster = () => {
  return (
    <Layout>
      <Title>The Scarlet Scourge Roster</Title>
      <RosterMain2 />
    </Layout>
  )
}

export default roster
