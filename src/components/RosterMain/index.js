import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import ListItem from "./listItem"
import InfiniteScroll from "react-infinite-scroll-component"

const ContainerWrapper = styled(Container)`
  max-width: 890px;
  padding-top: 30px;
  padding-bottom: 50px;
`
const Table = styled.div`
  padding: 0;
  color: #212529;
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

  const showPerLoad = 50
  const profiles = data.allTssMember.nodes.sort((a, b) => a.rank - b.rank)

  const [hasMore, setHasMore] = useState(true)
  const [items, setItems] = useState(profiles.slice(0, showPerLoad))
  const [shown, setShown] = useState(showPerLoad)

  const fetchMoreData = () => {
    if (items.length >= profiles.length) {
      setHasMore(false)
      return
    }
    setItems(items.concat(profiles.slice(shown, shown + showPerLoad)))
    setShown(shown + showPerLoad)
  }

  let lastUpdated = Date.parse(profiles[0].lastUpdated)
  let dtime = new Date(lastUpdated)

  return (
    <ContainerWrapper>
      <Row>
        <Col>
          <Table>
            {/* {data.allTssMember.nodes.slice(0, itemsToShow).map((v, i) => {
              const image = getImage(v.localImage)
              const imageBg = getImage(data.bg)

              return <ListItem key={i} v={v} image={image} imageBg={imageBg} />
            })} */}
            <div>Last updated: {dtime.toLocaleString()}</div>
            <div>Blizz Profiles successfully loaded: {profiles.length}</div>


            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {items.map((v, i) => {
                const image = getImage(v.localImage)
                const imageBg = getImage(data.bg)

                return (
                  <ListItem key={i} v={v} image={image} imageBg={imageBg} />
                )
              })}
            </InfiniteScroll>
          </Table>
        </Col>
      </Row>
    </ContainerWrapper>
  )
}

export default Index
