import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ContainerWrapper = styled(Container)``
const Wrapper = styled.div`
  background-color: #161b22;
`

const Gimg = styled(GatsbyImage)`
  max-width: 100px;
  margin: 5px auto;
  display: flex;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "tss_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(data.logo)

  return (
    <Wrapper>
      <ContainerWrapper>
        <Row>
          <Col>
            <Gimg image={image} alt="Logo" />
          </Col>
        </Row>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Header
