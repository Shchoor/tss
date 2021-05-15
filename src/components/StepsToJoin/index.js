import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const Section = styled.section``

const ContainerWrapper = styled(Container)`
  height: 300px;
  width: 100%;
`

const Index = () => {
  return (
    <Section>
      <ContainerWrapper>
        <Row>
          <Col>steps</Col>
        </Row>
      </ContainerWrapper>
    </Section>
  )
}

export default Index
