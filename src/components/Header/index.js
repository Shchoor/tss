import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const ContainerWrapper = styled(Container)``
const Wrapper = styled.div`
  background-color: #161b22;
`

const Gimg = styled(GatsbyImage)`
  max-width: 100px;
  margin: 5px;
  display: flex;
`
const Linkn = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.2s;

  &:hover {
    color: #f8b700;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
            <ColInner>
              <LinkWrapper>
                <Linkn to="/">Home</Linkn>
              </LinkWrapper>
              <Gimg image={image} alt="Logo" />
              <LinkWrapper>
                <Linkn to="/roster">Roster</Linkn>
              </LinkWrapper>
            </ColInner>
          </Col>
        </Row>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Header
