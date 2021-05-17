import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const Section = styled.section``

const ContainerWrapper = styled(Container)`
  /* width: 100%; */
`

const RowS = styled(Row)`
  padding-top: 100px;
  padding-bottom: 100px;
`

const Title = styled.h2`
  font-family: Eczar;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: unset;
  text-align: center;
  margin-bottom: 40px;
`
const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  max-width: 890px;
  margin-left: auto;
  margin-right: auto;
`

const Index = () => {
  return (
    <Section>
      <ContainerWrapper>
        <RowS>
          <Col>
            <Title> The Scarlet Scourge</Title>
            <Text>
              We are a unique guild concept founded on 11/1/2019 on the realm of
              Argent Dawn (We are now located on Ravencrest EU). The idea of the
              guild is that open world fun always comes first, and our main goal
              is to be the biggest and strongest world PvP guild in Europe. We
              have a long history of fighting the Alliance in Stormwind and in
              various other locations across Azeroth and beyond.
            </Text>
            <Text>
              What makes us stand out from just any zerg-tactic world PvP guild
              is the theme; we are all undead, all named a variation of
              "Abomination" and that we all wear special scarlet crusade themed
              transmogs. We also make interesting world PvP montages and we are
              one of the more popular guilds in World of Warcraft.
            </Text>
          </Col>
        </RowS>
      </ContainerWrapper>
    </Section>
  )
}

export default Index
