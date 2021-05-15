import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

const ContainerS = styled(Container)`
  max-width: 100%;
  max-height: 1300px;
  height: 100vh;
  position: relative;
`

const Gimg = styled(GatsbyImage)`
  /* max-width: 100px;
  margin: 5px;
  display: flex; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const Text = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    color: #ffffff;
    max-width: 450px;
  }

  h2 {
    text-align: center;

    color: #ffffff;
    margin-bottom: 0px;

    span {
      padding: 0 10px;
    }
  }

  h3 {
    text-align: center;
    color: #ffffff;
  }
`

const ColorButton = withStyles(theme => ({
  root: {
    color: "WHITE",
    backgroundColor: "#823b3b",
    fontFamily: "Eczar",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.25)",
    width: "160px",
    height: "46px",
    borderRadius: "0",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#823b3b",
    },
  },
}))(Button)

const Linkg = styled(Link)`
  mix-blend-mode: normal;
  text-align: center;
  text-decoration: none;
  margin-top: 50px;
`

const MainHero = ({ bgImage }) => {
  const image = getImage(bgImage)

  return (
    <ContainerS>
      <Gimg image={image} alt="bg" />
      <Row>
        <Col md={12}>
          <Text>
            <h1>The Scarlet Scourge</h1>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="5"
                viewBox="0 0 26 5"
                fill="none"
              >
                <path
                  d="M0.635431 1.14113L21.7516 0.559496L25.5205 4.03797L0.635431 1.14113Z"
                  fill="white"
                />
              </svg>
              <span>eu ravencrest guild</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="4"
                viewBox="0 0 24 4"
                fill="none"
              >
                <path
                  d="M23.7647 1.75795L3.719 0.504579L0.0222752 3.68484L23.7647 1.75795Z"
                  fill="white"
                />
              </svg>
            </h2>
            <h3>in World of Warcraft</h3>

            {/* <Linkg to="/how-to-join">Join us</Linkg> */}

            <Linkg to="/how-to-join">
              <ColorButton variant="contained" color="primary">
                Join us
              </ColorButton>
            </Linkg>
          </Text>
        </Col>
      </Row>
    </ContainerS>
  )
}

export default MainHero
