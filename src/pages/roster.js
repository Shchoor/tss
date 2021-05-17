import React, { useState } from "react"
import Layout from "../layout"
// import RosterMain2 from "../components/RosterMain2"
import RosterMain from "../components/RosterMain"
import styled from "styled-components"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import { Container, Row, Col } from "react-bootstrap"
import loadable from "@loadable/component"
import { withStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import Seo from "../components/seo"

const RosterMain2 = loadable(() => import("../components/RosterMain2"))

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
  color: #ffffff;
  font-size: 44px;
`

const ContainerS = styled(Container)`
  max-width: 890px;
`

const ColS = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  background-color: #2c2f33;
  padding-top: 180px;
  padding-bottom: 60px;
  /* height: 200px; */
`
const ColT = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 991px) {
    justify-content: center;
    margin-top: 20px;
  }
`

const TableToggle = withStyles(theme => ({
  root: {
    color: "WHITE",
    fontFamily: "Eczar",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.25)",
    width: "80px",
    height: "30px",
    borderRadius: "0",
    textTransform: "none",
    // backgroundColor: "#823b3b",
    padding: 0,

    "&.Mui-selected": {
      backgroundColor: "#823b3b",
      color: "WHITE",

      "&:hover": {
        backgroundColor: "#823b3b",
      },
    },

    span: {
      width: "100%",
      // backgroundColor: "#823b3b",
    },
  },
}))(ToggleButton)

const TableToggleNew = styled(TableToggle)`
  margin-left: 10px;
  span {
    width: 100%;
  }
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
      <Seo />
      <Section>
        <ContainerS>
          <Row>
            <Col></Col>
            <ColS>
              <Title>Abominations</Title>
            </ColS>
            <ColT>
              <ToggleButtonGroup
                value={rosterType}
                exclusive
                onChange={handleRosterType}
                aria-label="text alignment"
              >
                <TableToggleNew value="1" aria-label="left aligned">
                  <Tooltip title="Blizzard Profiles from API" placement="top">
                    <span>PR</span>
                  </Tooltip>
                </TableToggleNew>
                <TableToggleNew value="2" aria-label="centered">
                  <Tooltip title="Guild Data from WoW" placement="top">
                    <span>GD</span>
                  </Tooltip>
                </TableToggleNew>
              </ToggleButtonGroup>
            </ColT>
          </Row>
        </ContainerS>
      </Section>

      {rosterType === "2" ? <RosterMain2 /> : <RosterMain />}
    </Layout>
  )
}

export default Roster
