import React from "react"
import Layout from "../components/layout.js"
import Contact from "../components/contact.js"
import { graphql } from "gatsby"

export default props => {
  return (
    <Layout data={props.data} currentPage={props.location.pathname}>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
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
