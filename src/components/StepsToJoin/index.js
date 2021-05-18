import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Number from "./number"

const Section = styled.section`
  position: relative;
`

const ContainerWrapper = styled(Container)`
  /* width: 100%; */
`

const RowBlack = styled(Row)`
  background: #2c2f33;
  color: #ffffff;
  padding-top: 70px;
  padding-bottom: 70px;
  position: relative;
`

const RowWhite = styled(Row)`
  background: #ffffff;
  color: #2c2f33;
  padding-top: 70px;
  padding-bottom: 70px;
  position: relative;
`
const Title = styled.h2`
  font-family: Eczar;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: unset;
  text-align: center;
  margin-bottom: 0;

  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 34px;
  }
`
const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  max-width: 890px;
  margin-left: auto;
  margin-right: auto;
`
const Margin = styled.div`
  margin-bottom: 40px;

  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`
const Anchor = styled.div`
  position: absolute;
  top: -120px;
`

const Index = () => {
  return (
    <Section>
      <Anchor id="join"></Anchor>
      <ContainerWrapper fluid>
        <RowWhite>
          <Number n={1} color="#2C2F33" />
          <Col>
            <Title>Create a character named Abomination</Title>
            <Margin></Margin>

            <Text>
              We use special characters (accents/umlauts) for our names. The
              special letters you could use for your character name, as far as
              we know, are:
            </Text>
            <Text>
              [A = Á, À, Â, Ä, Å, Ã]
              <br />
              [ I = Í, Ì, Î, Ï]
              <br />
              [N = Ñ]
              <br />
              [O = Ó, Ò, Ô, Ö, Õ, Ø]
            </Text>
            <Text>Choose them at your own leisure. Example: Âbômínatîôñ</Text>
          </Col>
        </RowWhite>

        <RowBlack>
          <Number n={2} color="#ffffff" />

          <Col>
            <Title>Apply via the ingame guild finder</Title>
          </Col>
        </RowBlack>

        <RowWhite>
          <Number n={3} color="#2C2F33" />

          <Col>
            <Title>Join the Discord</Title>
            <Margin></Margin>
            <Text>
              After successfuly getting invited to the guild, return to our
              discord and use our ticket system to get a role
            </Text>
          </Col>
        </RowWhite>

        <RowBlack>
          <Number n={4} color="#ffffff" />
          <Col>
            <Title>Setup your identity</Title>
            <Margin></Margin>
            <Text>Fill your guild note with your [nickname].</Text>
            <Text>
              We also use our addon called abomiNATION to identify ourselves.
              This displays Guild Notes as a tooltip on target or mouseover. The
              addon also includes Identity 2 which adds your name in front of
              your chat messages. Can be enabled for guild, party and raid chat
              messages.
            </Text>
          </Col>
        </RowBlack>
      </ContainerWrapper>
    </Section>
  )
}

export default Index
