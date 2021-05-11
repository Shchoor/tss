import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContainerWrapper = styled(Container)`
  max-width: 890px;
  padding-top: 30px;
  padding-bottom: 50px;
`
const Table = styled.div`
  padding: 0;
  color: #212529;
`

const ListItem = styled.li`
  display: flex;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 20px 25px;
  position: relative;
  overflow: hidden;
`
const Cell = styled.div`
  h5 {
    margin-bottom: 0px;
  }
  p {
    margin-bottom: 0;
  }
  color: white;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`
const CellImg = styled(Cell)`
  line-height: 0;
`
const CellLeft = styled(Cell)`
  display: flex;
  width: calc(60% - 80px);
`

const CellRight = styled(Cell)`
  justify-content: center;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: calc(40%);
`

const Gimg = styled(GatsbyImage)`
  max-width: 80px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-right: 16px;

  img {
    margin-bottom: 0px;
  }
`

const Gbackground = styled(GatsbyImage)`
  position: absolute !important;
  top: -18%;
  right: 0;
  left: 0;
  /* bottom: 0; */
  z-index: -1;

  img {
    margin-bottom: 0px;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: rgba(30, 109, 227, 1);
  padding: 5px 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px transparent;
  transition: all 0.3s;
  display: block;
  min-width: 105px;
  text-align: center;

  &::first-child {
    margin-bottom: 5px;
  }

  &:hover {
    color: black;
    background-color: white;
  }
`

const ButtonWrapper = styled.div`
  box-shadow: -3px 3px 19px rgb(255 255 255 / 20%);

  &:first-child {
    margin-bottom: 5px;
  }
`

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query Member {
  //     allTssMember {
  //       nodes {
  //         id
  //         ilvl
  //         name
  //         spec
  //         avatar
  //         localImage {
  //           childImageSharp {
  //             gatsbyImageData(
  //               width: 500
  //               # placeholder: BLURRED
  //             )
  //           }
  //         }
  //       }
  //     }
  //     bg: file(relativePath: { eq: "background.png" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 690, placeholder: BLURRED)
  //       }
  //     }
  //   }
  // `)

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          {/* <Table>
            {data.allTssMember.nodes.length > 0
              ? data.allTssMember.nodes.map((v, i) => {
                  const image = getImage(v.localImage)
                  const imageBg = getImage(data.bg)

                  return (
                    <ListItem key={i}>
                      <Gbackground
                        image={imageBg}
                        // transformOptions={{
                        //   fit: "cover",
                        //   cropFocus: "attention",
                        // }}
                      />

                      <CellImg>
                        <Gimg image={image} alt={v.name} />
                      </CellImg>
                      <CellLeft>
                        <div>
                          <h5>{v.name}</h5>
                          <p>ilvl: {v.ilvl}</p>
                          <p>spec: {v.spec}</p>
                        </div>
                      </CellLeft>

                      <CellRight>
                        <ButtonWrapper>
                          <Link
                            target="_blank"
                            href={`https://check-pvp.fr/eu/Ravencrest/${v.name}`}
                          >
                            Check PvP
                          </Link>
                        </ButtonWrapper>
                        <ButtonWrapper>
                          <Link
                            target="_blank"
                            href={`https://worldofwarcraft.com/en-gb/character/eu/ravencrest/${v.name}`}
                          >
                            WoW Profile
                          </Link>
                        </ButtonWrapper>
                      </CellRight>
                    </ListItem>
                  )
                })
              : ""}
          </Table> */}
        </Col>
      </Row>
    </ContainerWrapper>
  )
}

export default Index
