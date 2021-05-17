import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import * as JsSearch from "js-search"

const ContainerWrapper = styled(Container)`
  max-width: 890px;
  padding-top: 30px;
  padding-bottom: 50px;
`
const Table = styled.div`
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  color: #212529;
  overflow: scroll;
`

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 100px 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.01);
  width: 100%;

  &:last-child {
    border-bottom-width: 0;
  }
`
const Cell = styled.div`
  /* width: 20%; */
  font-size: 14px;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem 5px;

  &:last-child {
    border-right-width: 0;
  }
  /* 
  &:nth-child(4) {
    width: 10%;
  } */

  @media (max-width: 767px) {
    font-size: 10px;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: rgba(30, 109, 227, 1);
`

const Form = styled.form`
  margin-top: 40px;
  box-shadow: 9px 9px 14px rgb(0 0 0 / 7%);
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    border: none;
    padding: 8px 20px;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    outline: none;
  }
`

const SearchIcon = styled.div`
  width: 20px;
  height: 28px;
  position: absolute;
  right: 20px;

  svg path {
    fill: rgba(83, 150, 134, 0.6);
  }
`

const removeNode = list => {
  let result = []

  list.forEach(item => {
    result.push({
      id: item.node.id,
      name: item.node.name,
      note: item.node.note,
      level: item.node.level,
      Class: item.node.Class,
      rank: item.node.rank,
      rankIndex: item.node.rankIndex,
    })
  })

  return result
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query notesQuery {
      allNotesJson {
        edges {
          node {
            id
            name
            level
            note
            rank
            Class
            rankIndex
          }
        }
      }
    }
  `)

  const rosterList = removeNode(data.allNotesJson.edges).sort(
    (a, b) => a.rankIndex - b.rankIndex
  )
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [isError, setIsError] = useState(false)
  const [value, setValue] = useState("")

  // const wtf = getAllIngridients(products)

  // console.log(wtf)

  useEffect(() => {
    if (rosterList.length) {
      rebuildIndex()
    } else {
      setIsError(true)
      console.log("error with rebuild index" + isError)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const queryResult = search.search(value)
      setSearchResults(queryResult)
      // console.log(queryResult)
    }
  }, [isLoading, value])

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search("id")

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")
    dataToSearch.addIndex("name")
    dataToSearch.addIndex("note")

    dataToSearch.addDocuments(rosterList)
    setSearch(dataToSearch)
    setIsLoading(false)
  }

  const handleInputChange = event => {
    const query = event.target.value
    setValue(query)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="Search"
              placeholder="Search by note, name"
              value={value}
              onChange={handleInputChange}
            />

            <SearchIcon>
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </SearchIcon>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            {searchResults.length > 0
              ? searchResults.map((v, i) => {
                  let numberOfCharacters = data.allNotesJson.edges.filter(
                    nv => nv.node.note === v.note && nv.node.note !== ""
                  ).length

                  return (
                    <ListItem key={i}>
                      <Cell>
                        <b>{v.name.replace("-Ravencrest", "")} </b>
                        {numberOfCharacters >= 2
                          ? `(${numberOfCharacters})`
                          : ""}
                      </Cell>
                      <Cell>{v.rank}</Cell>
                      <Cell>{v.note}</Cell>
                      <Cell>{v.Class}</Cell>
                      <Cell>level:{v.level}</Cell>
                      <Cell>
                        <Link
                          target="_blank"
                          href={`https://check-pvp.fr/eu/Ravencrest/${v.name.replace(
                            "-Ravencrest",
                            ""
                          )}`}
                        >
                          CheckPvP
                        </Link>
                      </Cell>
                    </ListItem>
                  )
                })
              : rosterList.map((v, i) => {
                  let numberOfCharacters = data.allNotesJson.edges.filter(
                    nv => nv.node.note === v.note && nv.node.note !== ""
                  ).length
                  return (
                    <ListItem key={i}>
                      <Cell>
                        <b>{v.name.replace("-Ravencrest", "")} </b>
                        {numberOfCharacters >= 2
                          ? `(${numberOfCharacters})`
                          : ""}
                      </Cell>
                      <Cell>{v.rank}</Cell>
                      <Cell>{v.note}</Cell>
                      <Cell>{v.Class}</Cell>
                      <Cell>level:{v.level}</Cell>

                      <Cell>
                        <Link
                          target="_blank"
                          href={`https://check-pvp.fr/eu/Ravencrest/${v.name.replace(
                            "-Ravencrest",
                            ""
                          )}`}
                        >
                          CheckPvP
                        </Link>
                      </Cell>
                    </ListItem>
                  )
                })}
          </Table>
          {/* <Table>
            {data.allNotesJson.edges.map(({ node }, i) => {
              let numberOfCharacters = data.allNotesJson.edges.filter(
                v => v.node.note === node.note && v.node.note !== ""
              ).length

              return (
                <ListItem key={i}>
                  <Cell>
                    <b>
                      {node.name.replace("-Ravencrest", "")}{" "}
                      {numberOfCharacters >= 2 ? `(${numberOfCharacters})` : ""}
                    </b>
                  </Cell>
                  <Cell>{node.note}</Cell>
                  <Cell>{node.level}</Cell>
                  <Cell>{node.class}</Cell>
                  <Cell>
                    <Link
                      target="_blank"
                      href={`https://check-pvp.fr/eu/Ravencrest/${node.name.replace(
                        "-Ravencrest",
                        ""
                      )}`}
                    >
                      CheckPvP
                    </Link>
                  </Cell>
                </ListItem>
              )
            })}
          </Table> */}
        </Col>
      </Row>
    </ContainerWrapper>
  )
}

export default Index
