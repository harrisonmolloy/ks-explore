import React from "react"
import Slide from "./slide.js"
import VideoSlide from "./videoslide.js"

class Slides extends React.Component {
  render(props) {
    let slideLen = this.props.data.images.image.length

    const slides = this.props.data.images.image.map((node, i) => {
      return <Slide key={i} node={node} />
    })
    slides.shift() // removes hero img

    // code here that inserts video content

    slides.splice(
      1,
      0,
      <VideoSlide
        key={slideLen + 0}
        type="vimeo"
        title="Love Letters"
        srcid="384929340"
      />
    )
    slides.splice(
      6,
      0,
      <VideoSlide
        key={slideLen + 1}
        type="vimeo"
        title="frances"
        srcid="317113576"
      />
    )
    slides.splice(
      9,
      0,
      <VideoSlide
        key={slideLen + 2}
        type="youtube"
        title="electric dreams"
        srcid="-plMEijrjYY"
      />
    )
    slides.splice(
      19,
      0,
      <VideoSlide
        key={slideLen + 3}
        type="youtube"
        title="Mia Wallace"
        srcid="oK52O3tCB7w"
      />
    )
    slides.splice(
      25,
      0,
      <VideoSlide
        key={slideLen + 4}
        type="youtube"
        title="Tartt"
        srcid="scbUrL2zrlM"
      />
    )

    return (
      <div className="slides">
        <img
          className="hero-img"
          src={this.props.data.images.image[0].node.childImageSharp.fixed.src}
          alt={
            this.props.data.images.image[0].node.childImageSharp.fixed
              .originalName
          }
        />
        <div id="kate">&nbsp;</div>
        <div className="about">
          <p>
            Kate&nbsp;Sylvester’s beautiful, intelligent collections embody
            modern femininity. Each collection explores a concept, creating
            visual commentaries that challenges nostalgic sensibilities with
            modern use&nbsp;of colour and exclusive&nbsp;print.
          </p>

          <p>
            Committed to supporting the local garment production industry,
            Kate&nbsp;Sylvester garments are made locally in Aotearoa,
            New&nbsp;Zealand.
          </p>

          <p>
            Kate&nbsp;Sylvester creates luxury for living in, modern yet
            timeless classics to be loved for a lifetime not&nbsp;a&nbsp;season.
          </p>
        </div>
        {slides}
      </div>
    )
  }
}

export default Slides
