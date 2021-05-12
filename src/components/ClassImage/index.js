import React, { useMemo } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const ClassImage = ({ src }) => {
  //   const src = `class/${id}_class.png`

  const data = useStaticQuery(graphql`
    query FileQ {
      allFile(filter: { relativePath: { regex: "/class/" } }) {
        edges {
          node {
            id
            relativePath
            name
            childImageSharp {
              gatsbyImageData(width: 24)
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  const image = getImage(match.node.childImageSharp)

    return image ? <GatsbyImage image={image} alt="class" /> : ''
}

export default ClassImage
