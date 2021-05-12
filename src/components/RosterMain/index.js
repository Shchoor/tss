import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import ListItem from "./listItem"
import * as JsSearch from "js-search"

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
  input {
    width: 90%;
  }
  button {
    width: 10%;
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
  const handleClear = event => {
    setValue("")
  }

  // const [hasMore, setHasMore] = useState(true)
  // const [items, setItems] = useState(searchResults.slice(0, showPerLoad))
  // const [shown, setShown] = useState(showPerLoad)

  // const fetchMoreData = () => {
  //   if (items.length >= searchResults.length) {
  //     setHasMore(false)
  //     return
  //   }
  //   setItems(items.concat(searchResults.slice(shown, shown + showPerLoad)))
  //   setShown(shown + showPerLoad)
  // }

  let lastUpdated = Date.parse(profiles[0].lastUpdated)
  let dtime = new Date(lastUpdated)

  const showByLoad = 50

  const [limit, setLimit] = React.useState(showByLoad)

  const handleLoad = (event, value) => {
    setLimit(limit + showByLoad)
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
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              aria-label="Search"
              placeholder="Search"
              value={value}
              onChange={handleInputChange}
            />

            <button onClick={handleClear} className="search-btn">
              <span>Clear</span>
            </button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <div>
              {searchResults.length > 0
                ? searchResults.slice(0, limit).map((v, i) => {
                    const image = getImage(v.localImage)
                    const imageBg = getImage(data.bg)

                    return (
                      <ListItem key={i} v={v} image={image} imageBg={imageBg} />
                    )
                  })
                : profiles.slice(0, limit).map((v, i) => {
                    const image = getImage(v.localImage)
                    const imageBg = getImage(data.bg)

                    return (
                      <ListItem key={i} v={v} image={image} imageBg={imageBg} />
                    )
                  })}
            </div>
            <div>
              {limit < searchResults.length || limit < profiles.length ? (
                <button onClick={handleLoad}>Load more</button>
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
