import React from "react"
import Img from "gatsby-image"

class Archive extends React.Component {
  render() {
    let data = this.props.data
    let title = data[0]

    let images = data[1].map((node, i) => {
      return (
        <Img
          key={i}
          fixed={node}
          Tag="span"
          style={{
            overflow: "hidden",
            position: "unset",
            display: "unset",
            width: "unset",
            height: "40vh",
          }}
          imgStyle={{
            position: "unset",
            top: "unset",
            left: "unset",
            objectFit: "unset",
            objectPosition: "unset",
            display: "unset",
            width: "unset",
            height: "40vh",
          }}
          placeholderStyle={{
            display: "none",
          }}
        />
      )
    })

    return (
      <div className="collection">
        <div className="slider">{images}</div>
        <div className="caption">{title.slice(3)}</div>
      </div>
    )
  }
}

export default Archive
