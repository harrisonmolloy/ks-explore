import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import icon from "../assets/icon.png"

const SiteMetadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { url, title },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          url
          title
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s ${title}`}>
      <html lang="en" />
      <link rel="canonical" href={`${url}${pathname}`} />
      <meta name="docsearch:version" content="1.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="Description" content="Explore the Kate Sylvester brand" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${url}${icon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
  )
}

export default SiteMetadata
