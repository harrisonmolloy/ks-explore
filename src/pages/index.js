import React from "react"
import Layout from "../components/layout.js"
import Slides from "../components/slides.js"
import { graphql } from "gatsby"

class Index extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} currentPage={this.props.location.pathname}>
        <Slides data={this.props.data} />
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
  {
    images: allFile(
      sort: { fields: [childImageSharp___fixed___originalName], order: ASC }
      filter: { sourceInstanceName: { eq: "main" } }
    ) {
      image: edges {
        node {
          childImageSharp {
            fixed(width: 1200, quality: 70, toFormat: JPG) {
              src
              aspectRatio
              width
              height
              originalName
              ...GatsbyImageSharpFixed
            }
          }
          sourceInstanceName
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
