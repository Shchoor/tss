import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const ContainerWrapper = styled(Container)`
  max-width: 1100px;
  padding-top: 30px;
  padding-bottom: 50px;
`

const Table = styled.div`
  border-radius: 0.25rem;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  color: #212529;
`

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.01);

  &:last-child {
    border-bottom-width: 0;
  }
`
const Cell = styled.div`
  width: 20%;
  font-size: 14px;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem 5px;

  &:last-child {
    border-right-width: 0;
  }

  &:nth-child(1) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 10%;
  }

  @media (max-width: 767px) {
    font-size: 10px;
  }
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query Member {
      allTssMember {
        nodes {
          id
          ilvl
          name
          spec
          avatar
        }
      }
    }
  `)

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          <Table>
            {data.allTssMember.nodes.length > 0
              ? data.allTssMember.nodes.map((v, i) => {
                  const path = v.avatar
                  console.log(v.avatar)
                  return (
                    <ListItem key={i}>
                      <Cell>name: {v.name}</Cell>
                      <Cell>ilvl: {v.ilvl}</Cell>
                      <Cell>spec: {v.spec}</Cell>
                      <Cell>
                        avatar: {v.avatar}
                      </Cell>
                    </ListItem>
                  )
                })
              : ""}
          </Table>
        </Col>
      </Row>
    </ContainerWrapper>
  )
}

export default Index
