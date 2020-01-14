import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

class Retail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageIndex: 0,
      imageCount: this.props.data.images.image.length,
    }

    this.nextImage = this.nextImage.bind(this)
  }

  nextImage() {
    this.setState(() => {
      if (this.state.imageIndex === this.state.imageCount - 1) {
        return { imageIndex: 0 }
      } else {
        return { imageIndex: this.state.imageIndex + 1 }
      }
    })
  }

  render() {
    let i = this.state.imageIndex
    let currentImage = this.props.data.images.image[i].node.childImageSharp

    return (
      <Layout data={this.props.data} currentPage={this.props.location.pathname}>
        <div className="retail">
          <p className="copy">
            Since the brand’s inception in 1993, Kate&#160;Sylvester has become
            one&nbsp;of New&nbsp;Zealand’s most renowned designers.
            <br /> <br />
            Kate&#160;Sylvester has six concept boutiques throughout
            New&nbsp;Zealand. Offering a sophisticated and personal brand
            experience, these considered interior spaces are strong yet
            understated with signature Kate&#160;Sylvester design elements
            including custom built furniture and fixtures made with care
            by&nbsp;New&nbsp;Zealand craftsman. <br /> <br />
            Kate&#160;Sylvester stores offer the full ready to wear collection,
            diffusion line Sylvester and&nbsp;her exclusive eyewear, footwear
            and jewellery&nbsp;lines.
          </p>
          <div className="slider">
            <img
              className="store-image"
              src={currentImage.fixed.src}
              alt={currentImage.fixed.originalName}
            />
            <caption>Kate Sylvester Ponsonby</caption>
            <button onClick={this.nextImage}></button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Retail

export const query = graphql`
  {
    images: allFile(
      sort: { fields: [childImageSharp___fixed___originalName], order: ASC }
      filter: { sourceInstanceName: { eq: "retail" } }
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
