import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import ListItem from "./listItem"
import * as JsSearch from "js-search"
import Button from "@material-ui/core/Button"

import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"

const ContainerWrapper = styled(Container)`
  max-width: 890px;
  padding-top: 30px;
  padding-bottom: 50px;
`
const Table = styled.div`
  padding: 0;
  color: #212529;
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
    max-width: 900px;
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

const LoadMore = styled(Button)`
  background: #823b3b;
  mix-blend-mode: normal;
  box-shadow: 0px 14px 20px rgba(0, 0, 0, 0.25);
  max-width: 160px;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 100%;
  display: flex;
  /* justify-contentc */
  justify-content: center;
  border: none;
  align-items: center;
`

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText('black'),
//     backgroundColor: 'black',
//     '&:hover': {
//       backgroundColor: 'grey',
//     },
//   },
// }))(Button);

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
          specId
          classId
          note
          rank
          level
          lastUpdated
          localImage {
            childImageSharp {
              gatsbyImageData(
                width: 500
                # placeholder: BLURRED
              )
            }
          }
        }
      }
      bg: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          gatsbyImageData(width: 690, placeholder: BLURRED)
        }
      }
    }
  `)
  const profiles = data.allTssMember.nodes.sort((a, b) => a.rank - b.rank)

  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [isError, setIsError] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    if (profiles.length) {
      rebuildIndex()
    } else {
      setIsError(true)
      console.log("error with rebuild index:" + isError)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (value === "") {
        setSearchResults(profiles)
      } else {
        const queryResult = search.search(value)

        const timeOutId = setTimeout(() => setSearchResults(queryResult), 1000)
        return () => clearTimeout(timeOutId)
      }
    }
  }, [isLoading, value])

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search("id")

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("id")
    dataToSearch.addIndex("name")
    dataToSearch.addIndex("note")

    dataToSearch.addDocuments(profiles)
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

  let lastUpdated = Date.parse(profiles[0].lastUpdated)
  let dtime = new Date(lastUpdated)

  const showByLoad = 100
  const [limit, setLimit] = React.useState(20)
  const handleLoad = (event, value) => {
    setLimit(limit + showByLoad)
  }

  const [filter, setFilter] = useState("rank")

  const handleFilter = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter)
    }
  }

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          <div>Last updated: {dtime.toLocaleString()}</div>
          <div>Blizz Profiles successfully loaded: {profiles.length}</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilter}
            aria-label="text alignment"
          >
            <ToggleButton value="rank" aria-label="left aligned">
              Rank
            </ToggleButton>
            <ToggleButton value="ilvl" aria-label="centered">
              Item level
            </ToggleButton>
            <ToggleButton value="level" aria-label="right aligned">
              Level
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>

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
            <div>
              {searchResults.length > 0
                ? searchResults
                    .sort(
                      filter === "rank"
                        ? (a, b) => a.rank - b.rank
                        : filter === "ilvl"
                        ? (a, b) => b.ilvl - a.ilvl
                        : filter === "level"
                        ? (a, b) => b.level - a.level
                        : null
                    )
                    .slice(0, limit)
                    .map((v, i) => {
                      const image = getImage(v.localImage)
                      const imageBg = getImage(data.bg)

                      return (
                        <ListItem
                          key={i}
                          v={v}
                          image={image}
                          imageBg={imageBg}
                        />
                      )
                    })
                : "Nothing found"}
            </div>
            <div>
              limit: {limit}
              sl: {searchResults.length}
              {limit <= searchResults.length ? (
                <LoadMore onClick={handleLoad}>Load more</LoadMore>
              ) : (
                ""
              )}
            </div>
          </Table>
        </Col>
      </Row>
    </ContainerWrapper>
  )
}

export default Index
