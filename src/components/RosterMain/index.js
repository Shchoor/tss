import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import * as JsSearch from "js-search"

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
const Link = styled.a`
  text-decoration: none;
  color: rgba(30, 109, 227, 1);
`

const Form = styled.form`
  input {
    width: 90%;
  }
  button {
    width: 10%;
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
          }
        }
      }
    }
  `)

  const rosterList = removeNode(data.allNotesJson.edges)
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
      console.log("error with rebuild index")
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

    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
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
    setValue("")
  }

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="Search"
              placeholder="Search"
              value={value}
              onChange={handleInputChange}
            />

            <button type="submit" value="Submit" className="search-btn">
              <span>Clear</span>
            </button>
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
                      <Cell>{v.note}</Cell>
                      <Cell>{v.level}</Cell>
                      <Cell>{v.Class}</Cell>
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
                      <Cell>{v.note}</Cell>
                      <Cell>{v.level}</Cell>
                      <Cell>{v.Class}</Cell>
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
