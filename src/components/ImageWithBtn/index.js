import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Section = styled.section``

const ContainerWrapper = styled(Container)`
  max-width: 100%;
  /* max-height: 1300px; */
  height: 550px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    height: 350px;
  }
`

const Gimg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
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
  display: block;
  max-width: fit-content;
`

const Index = ({ bgImage, btnText, btnUrl }) => {
  const image = getImage(bgImage)

  return (
    <Section>
      <ContainerWrapper>
        <Gimg image={image} alt="bg" />

        <Linkg to={btnUrl}>
          <ColorButton variant="contained" color="primary">
          {btnText}
          </ColorButton>
        </Linkg>
      </ContainerWrapper>
    </Section>
  )
}

export default Index
