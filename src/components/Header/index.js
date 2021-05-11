import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ContainerWrapper = styled(Container)`
  /* margin: 3rem auto;
  max-width: 700px;
  display: flex;
  flex-direction: column; */
  /* background-color: #161b22; */
`
const Wrapper = styled.div`
  /* margin: 3rem auto;
  max-width: 700px;
  display: flex;
  flex-direction: column; */
  background-color: #161b22;
  /* background-color: #f5f5f5; */
  /* background-color: white; */
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
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
          )
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
            {/* <GatsbyImage
            //   className={styles.sezzleStepsImg}
              fluid={data.file.childImageSharp.fluid}
            //   imgStyle={{ objectFit: "contain" }}
            /> */}

            <Gimg image={image} alt="Logo" />
          </Col>
        </Row>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Header
