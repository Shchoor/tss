import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import ListItem from "./listItem"
import * as JsSearch from "js-search"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"

import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ClassImage from "../ClassImage"

const ContainerWrapper = styled(Container)`
  max-width: 890px;
  padding-top: 30px;
  padding-bottom: 10px;
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

const LastUpdated = styled.div`
  font-size: 13px;
  text-align: center;
`

const SortToggle = withStyles(theme => ({
  root: {
    color: "WHITE",
    backgroundColor: "#2c2f33",
    fontFamily: "Eczar",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "30px",
    borderRadius: "0",
    textTransform: "none",
    // backgroundColor: "#823b3b",
    padding: "5px 10px",
    marginRight: "5px",

    "&:hover": {
      backgroundColor: "#2c2f33",
    },

    "&.Mui-selected": {
      backgroundColor: "#823b3b",
      color: "WHITE",

      "&:hover": {
        backgroundColor: "#823b3b",
      },
    },
  },
}))(ToggleButton)

const SortToggleNew = styled(SortToggle)`
  margin-right: 10px;
  padding: 0 8px;

  .gatsby-image-wrapper {
    width: 24px;
    height: 24px;
  }
  span {
    width: 100%;
  }
`

const FilterToggleNew = styled(SortToggle)`
  margin-left: 10px;
  padding: 0 8px;

  .gatsby-image-wrapper {
    width: 24px;
    height: 24px;
  }
  span {
    width: 100%;
  }

  @media (max-width: 991px) {
    margin-right: 5px;
    margin-left: 5px;
    padding: 0 4px;
  }
`

const ToggleButtonGroupS = styled(ToggleButtonGroup)`
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 10px;
    justify-content: center;
  }
`

const ColC = styled(Col)``
const ColF = styled(Col)`
  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
  }
`

const ColorButton = withStyles(theme => ({
  root: {
    display: "flex",
    color: "white",
    backgroundColor: "#823b3b",
    fontFamily: "Eczar",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    boxShadow: "0px 14px 20px rgba(0, 0, 0, 0.25)",
    width: "160px",
    height: "46px",
    borderRadius: "0",
    textTransform: "none",
    margin: "40px auto 40px auto",
    "&:hover": {
      backgroundColor: "#823b3b",
    },
  },
}))(Button)

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
      bg: file(relativePath: { eq: "footer-bg.jpg" }) {
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

  const [filterClass, setFilterClass] = useState(0)

  const handleFilterClass = (event, newFilter) => {
    if (newFilter !== null) {
      setFilterClass(prevState => newFilter)
    }
  }

  useEffect(() => {
    setLimit(20)
  }, [filter, filterClass])

  const displayResults = searchResults
    .filter(m => filterClass === m.classId || filterClass === 0)
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

  return (
    <section>
      <ContainerWrapper>
        <Row>
          <ColF>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilter}
              aria-label="text alignment"
            >
              <SortToggleNew value="rank" aria-label="left aligned">
                Rank
              </SortToggleNew>
              <SortToggleNew value="ilvl" aria-label="centered">
                Item level
              </SortToggleNew>
              <SortToggleNew value="level" aria-label="right aligned">
                Level
              </SortToggleNew>
            </ToggleButtonGroup>
          </ColF>

          <ColC>
            <ToggleButtonGroupS
              value={filterClass}
              exclusive
              onChange={handleFilterClass}
              aria-label="text alignment"
            >
              <FilterToggleNew value={0} aria-label="right aligned">
                All
              </FilterToggleNew>
              <FilterToggleNew value={1} aria-label="right aligned">
                <ClassImage src={`class/1_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={3} aria-label="right aligned">
                <ClassImage src={`class/3_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={8} aria-label="right aligned">
                <ClassImage src={`class/8_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={4} aria-label="right aligned">
                <ClassImage src={`class/4_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={5} aria-label="right aligned">
                <ClassImage src={`class/5_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={9} aria-label="right aligned">
                <ClassImage src={`class/9_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={10} aria-label="right aligned">
                <ClassImage src={`class/10_class.png`} />
              </FilterToggleNew>
              <FilterToggleNew value={6} aria-label="right aligned">
                <ClassImage src={`class/6_class.png`} />
              </FilterToggleNew>
            </ToggleButtonGroupS>
          </ColC>
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
                {displayResults.map((v, i) => {
                  const image = getImage(v.localImage)
                  const imageBg = getImage(data.bg)

                  return (
                    <ListItem key={i} v={v} image={image} imageBg={imageBg} />
                  )
                })}
              </div>
              <div>
                {limit < displayResults.length ? (
                  <ColorButton onClick={handleLoad}>Load more</ColorButton>
                ) : (
                  ""
                )}
              </div>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <LastUpdated>Last updated: {dtime.toLocaleString()}</LastUpdated>
            {/* <div>Blizz Profiles successfully loaded: {profiles.length}</div> */}
          </Col>
        </Row>
      </ContainerWrapper>
    </section>
  )
}

export default Index
