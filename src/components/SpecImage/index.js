import React, { useMemo } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const SpecImage = ({ src }) => {
  const data = useStaticQuery(graphql`
    query FileQSpec {
      allFile(filter: { relativePath: { regex: "/spec/" } }) {
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
    [(data, src)]
  )

  const image = getImage(match.node.childImageSharp)

  return image ? <GatsbyImage image={image} alt="spec" /> : ""
}

export default SpecImage
