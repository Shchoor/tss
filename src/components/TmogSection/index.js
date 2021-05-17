import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Section = styled.section`
  position: relative;
`

const ContainerWrapper = styled(Container)`
  /* max-width: 100%; */
  /* max-height: 1300px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding-top: 80px;
  padding-bottom: 80px;
`

const Gimg = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const CardImg = styled(GatsbyImage)``

const ColorButton = withStyles(theme => ({
  root: {
    color: "WHITE",
    backgroundColor: "#823b3b",
    fontFamily: "Eczar",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "30px",
    borderRadius: "0",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#823b3b",
    },
  },
}))(Button)

const Linkg = styled.a`
  mix-blend-mode: normal;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 100%;
`
const CardsWrapper = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding-top: 50px;
  max-width: fit-content;
  margin: auto;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: rgba(44, 47, 51, 0.8);
  box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.25);
  padding: 10px;
`

const Text = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  max-width: 890px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
`

const CardTextWrapper = styled.div`
  min-height: 118px;
  margin-bottom: 15px;

  h3 {
    font-family: Eczar;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
    color: #ffffff;
    letter-spacing: 0;
    text-shadow: none;
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
  }
  li {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    margin-bottom: 4px;

    a {
      text-decoration: none;
    }
  }
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query ImgTmog {
      bg: file(relativePath: { eq: "soilders-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 2100, placeholder: BLURRED)
        }
      }
      leather: file(relativePath: { eq: "leather.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 410, placeholder: BLURRED)
        }
      }
      cloth: file(relativePath: { eq: "cloth.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 410, placeholder: BLURRED)
        }
      }
      #   mail: file(relativePath: { eq: "mail.jpg" }) {
      #     childImageSharp {
      #       gatsbyImageData(width: 410, placeholder: BLURRED)
      #     }
      #   }
      plate: file(relativePath: { eq: "plate.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 410, placeholder: BLURRED)
        }
      }
    }
  `)

  const bg = getImage(data.bg)
  const leather = getImage(data.leather)
  const cloth = getImage(data.cloth)
  const mail = getImage(data.mail)
  const plate = getImage(data.plate)

  return (
    <Section>
      <Gimg image={bg} alt="bg" />
      <ContainerWrapper>
        <Row>
          <Col>
            <Text>
              To reach higher rank in guild and to attend most events, you need
              to acquire official guild transmog for your armor type.
            </Text>

            <Text>
              It's important to note that it is not mandatory to wear unless
              attending an event or recording. Although, people who want wear
              them off events, are more than welcome to do so.
            </Text>
            <Text>
              Paragons and above get to choose their own transmog which fits the
              theme.
            </Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <CardsWrapper>
              <Card>
                <CardImg image={leather} alt="leather" />
                <CardTextWrapper>
                  <h3>Leather</h3>
                  <ul>
                    <li>
                      Staff = {` `}
                      <b>
                        <a
                          style={{ color: "#a335ee" }}
                          data-wowhead="item=812"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=812/glowing-brightwood-staff?bonus=6661"
                        >
                          Glowing Brightwood Staff
                        </a>
                      </b>
                    </li>
                    <li>
                      Main Hand + Off-Hand ={" "}
                      <b>
                        <a
                          style={{ color: "#a335ee" }}
                          data-wowhead="item=19168"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=19168/blackguard"
                        >
                          Blackguard
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=37024"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=37024/medicine-stick?bonus=3631"
                        >
                          Medicine Stick
                        </a>
                      </b>
                    </li>
                    <li>
                      Main Hand + Off-Hand Weapon =
                      <b>
                        {" "}
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=7752"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=7752/dreamslayer?bonus=6710"
                        >
                          Dreamslayer
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=7752"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=7752/dreamslayer?bonus=6710"
                        >
                          Dreamslayer
                        </a>
                      </b>
                    </li>
                    <li>
                      Dagger + Dagger ={" "}
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=22266"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=22266/flarethorn?bonus=6710"
                        >
                          Flarethorn
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=22266"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=22266/flarethorn?bonus=6710"
                        >
                          Flarethorn
                        </a>
                      </b>
                    </li>
                  </ul>
                </CardTextWrapper>
                <Linkg
                  href="https://www.wowhead.com/dressing-room#aV0c0zJ89ccVM0M9m8VpW8zqo8MLm8zfO8hpB808M1e8n187MoYX808M1j8n18M1x8n18Ue2808M1t8n18M1T8n187R"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ColorButton variant="contained" color="primary">
                    Dressing room
                  </ColorButton>
                </Linkg>
              </Card>

              <Card>
                <CardImg image={cloth} alt="cloth" />
                <CardTextWrapper>
                  <h3>Cloth</h3>
                  <ul>
                    <li>
                      Staff ={" "}
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=937"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=937/black-duskwood-staff?bonus=6659"
                        >
                          Black Duskwood Staff
                        </a>
                      </b>
                    </li>
                    <li>
                      Dagger + Off-Hand ={" "}
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=22266"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=22266/flarethorn?bonus=6710"
                        >
                          Flarethorn
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=37024"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=37024/medicine-stick?bonus=3631"
                        >
                          Medicine Stick
                        </a>
                      </b>
                    </li>
                    <li>
                      Sword + Off-Hand ={" "}
                      <b>
                        <a
                          style={{ color: "#a335ee" }}
                          data-wowhead="item=19168"
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.wowhead.com/item=19168/blackguard"
                        >
                          Blackguard
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=37024"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=37024/medicine-stick?bonus=3631"
                        >
                          Medicine Stick
                        </a>
                      </b>
                    </li>
                    <li>
                      Mace + Off-Hand ={" "}
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=23544"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=23544/runic-hammer"
                        >
                          Runic Hammer
                        </a>
                        +{" "}
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=37024"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=37024/medicine-stick?bonus=3631"
                        >
                          Medicine Stick
                        </a>
                      </b>
                    </li>
                    <li>
                      Wand + Off-Hand =
                      <b>
                        {" "}
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=29149"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=29149/sporelings-firestick"
                        >
                          Sporeling's Firestick
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=37024"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=37024/medicine-stick?bonus=3631"
                        >
                          Medicine Stick
                        </a>
                      </b>
                    </li>
                  </ul>
                </CardTextWrapper>
                <Linkg
                  href="https://www.wowhead.com/dressing-room#sV0R0zJ89mcMsz9m8uGz808uul808an5808M4t808WFD808oYX87cmdI808sKB808mdA808mdT87k"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ColorButton variant="contained" color="primary">
                    Dressing room
                  </ColorButton>
                </Linkg>
              </Card>

              <Card>
                <CardImg image={plate} alt="plate" />
                <CardTextWrapper>
                  <h3>Plate</h3>
                  <ul>
                    <li>
                      2-Handed Weapon ={" "}
                      <b>
                        {" "}
                        <a
                          style={{ color: "#a335ee" }}
                          data-wowhead="item=13505"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=13505/runeblade-of-baron-rivendare?bonus=6712"
                        >
                          Runeblade of Baron Rivendare
                        </a>
                      </b>
                    </li>
                    <li>
                      Main Hand + Shield =
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=34667"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=34667/archmages-guile"
                        >
                          Archmage's Guile
                        </a>{" "}
                        + <br />
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=31200"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=31200/shield-of-the-wayward-footman?bonus=6659"
                        >
                          Shield of the Wayward Footman
                        </a>
                      </b>
                    </li>
                    <li>
                      Main Hand + Off-Hand ={" "}
                      <b>
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=34667"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=34667/archmages-guile"
                        >
                          Archmage's Guile
                        </a>{" "}
                        +{" "}
                        <a
                          style={{ color: "#0070dd" }}
                          data-wowhead="item=34667"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=34667/archmages-guile"
                        >
                          Archmage's Guile
                        </a>
                      </b>
                    </li>
                  </ul>
                </CardTextWrapper>
                <Linkg
                  href="https://www.wowhead.com/dressing-room#sV0z0zJ89ccVM0o9m8cm3808opW808VQC808HRE87coYX87cHRC808HRl808HRB808HRD87k"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ColorButton variant="contained" color="primary">
                    Dressing room
                  </ColorButton>
                </Linkg>
              </Card>

              <Card>
                <CardImg image={plate} alt="mail" />

                <CardTextWrapper>
                  <h3>Mail</h3>
                  <ul>
                    <li>
                      Ranged Weapon ={" "}
                      <b>
                        <a
                          style={{ color: "#1eff00" }}
                          data-wowhead="item=25272"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=25272/pc-54-shotgun?bonus=6655"
                        >
                          PC-54 Shotgun
                        </a>
                      </b>
                    </li>
                    <li>
                      2-Handed Weapon ={" "}
                      <b>
                        <a
                          style={{ color: "#a335ee" }}
                          data-wowhead="item=13505"
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.wowhead.com/item=13505/runeblade-of-baron-rivendare?bonus=6712"
                        >
                          Runeblade of Baron Rivendare
                        </a>
                      </b>
                    </li>
                  </ul>
                </CardTextWrapper>
                <Linkg
                  href="https://www.wowhead.com/dressing-room#aV0c0zJ89ccVM0o9m8kNJ8n18mAw8zfO8VQC808cmm87coYX87ccmk808cmV808cmo808cmR8zqH87R"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ColorButton variant="contained" color="primary">
                    Dressing room
                  </ColorButton>
                </Linkg>
              </Card>
            </CardsWrapper>
          </Col>
        </Row>
      </ContainerWrapper>
    </Section>
  )
}

export default Index
