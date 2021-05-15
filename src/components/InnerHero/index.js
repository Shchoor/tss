import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Section = styled.section`
  background-color: #2c2f33;
  padding-top: 180px;
  padding-bottom: 60px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;
  color: #ffffff;
  font-size: 44px;
`

const Index = ({ title }) => {
  return (
    <Section>
      <Container>
        <Row>
          <Col md={12}>
            <Title>{title}</Title>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Index
