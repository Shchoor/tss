import React, { useState } from "react"
import Layout from "../layout"
// import RosterMain2 from "../components/RosterMain2"
import RosterMain from "../components/RosterMain"
import styled from "styled-components"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import { Container, Row, Col } from "react-bootstrap"
import loadable from "@loadable/component"

const RosterMain2 = loadable(() => import("../components/RosterMain2"))


const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 0;
`

const ContainerS = styled(Container)`
  padding-top: 50px;
`

const ColS = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Roster = () => {
  const [rosterType, setRosterType] = useState("1")

  const handleRosterType = (event, newFilter) => {
    if (newFilter !== null) {
      setRosterType(newFilter)
    }
  }

  return (
    <Layout>
      <ContainerS>
        <Row>
          <Col></Col>
          <ColS>
            <Title>Abominations</Title>
          </ColS>

          <Col>
            <ToggleButtonGroup
              value={rosterType}
              exclusive
              onChange={handleRosterType}
              aria-label="text alignment"
            >
              <ToggleButton value="1" aria-label="left aligned">
                PR
              </ToggleButton>
              <ToggleButton value="2" aria-label="centered">
                GD
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
      </ContainerS>

      {rosterType === "2" ? <RosterMain2 /> : <RosterMain />}
    </Layout>
  )
}

export default Roster
