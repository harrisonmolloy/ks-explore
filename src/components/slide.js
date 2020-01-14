import React from "react"
import LazyLoad from "react-lazy-load"

class Slide extends React.Component {
  render(props) {
    return (
      <LazyLoad className="slide" debounce={false} offsetVertical={900}>
        <img
          src={this.props.node.node.childImageSharp.fixed.src}
          alt={this.props.node.node.childImageSharp.fixed.originalName}
        />
      </LazyLoad>
    )
  }
}

export default Slide
