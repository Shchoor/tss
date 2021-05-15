import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Section = styled.section`
  background-color: #2c2f33;
  height: 200px;
`

const Index = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col md={12}>yo</Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Index
