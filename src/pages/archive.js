import React from "react"
import Layout from "../components/layout.js"
import Archive from "../components/archive.js"
import { graphql } from "gatsby"

export default props => {
  return (
    <Layout data={props.data} currentPage={props.location.pathname}>
      <Archive data={props.data}>
        <p>
          Kate Sylvester’s conceptual collections offer creative visual
          commentaries, exploring disparate references that challenge nostalgic
          sensibilities with modern use of colour and exclusive&nbsp;prints.
        </p>
        <p>
          Collections explore both nostalgic themes and contemporary culture,
          paying homage to the world of literature, music, film and fine art.
          Past collections have explored Gustave&nbsp;Klimt’s The&nbsp;Kiss, the
          music&nbsp;of Nick&nbsp;Cave, cult classic film Blade&nbsp;Runner and
          much&nbsp;more.
        </p>
        <p>Explore some of our recent collections below.</p>
      </Archive>
    </Layout>
  )
}

export const query = graphql`
  {
    images: allFile(
      sort: { fields: [childImageSharp___fixed___originalName], order: ASC }
      filter: { relativeDirectory: {}, sourceInstanceName: { eq: "archive" } }
    ) {
      image: edges {
        node {
          childImageSharp {
            fixed(height: 600, quality: 70, toFormat: JPG) {
              src
              aspectRatio
              width
              height
              originalName
              ...GatsbyImageSharpFixed
            }
          }
          relativeDirectory
        }
      }
    }
    site {
      siteMetadata {
        navConfig {
          navItems {
            title
            link
            internal
          }
        }
      }
    }
  }
`
