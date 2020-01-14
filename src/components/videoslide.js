import React from "react"
import LazyLoad from "react-lazy-load"

class Slide extends React.Component {
  render(props) {
    if (this.props.type === "youtube") {
      return (
        <LazyLoad className="slide video" debounce={false} offsetVertical={900}>
          <div className="hide-controls">
            <iframe
              title={this.props.title}
              width="560"
              height="700"
              src={
                "https://www.youtube.com/embed/" +
                this.props.srcid +
                "?autoplay=1" +
                "&modestbranding=1" +
                "&loop=1" +
                "&controls=0" +
                "&disablekb=1" +
                "&rel=0" +
                "&mute=1"
              }
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </LazyLoad>
      )
    } else if (this.props.type === "vimeo") {
      return (
        <LazyLoad className="slide video" debounce={false} offsetVertical={900}>
          <div className="hide-controls">
            <iframe
              title={this.props.title}
              src={
                "https://player.vimeo.com/video/" +
                this.props.srcid +
                "?background=1" +
                "&controls=0" +
                "&muted=1" +
                "&portrait=0" +
                "&title=0" +
                "&transparent=0" +
                "&autoplay=1" +
                "&loop=1" +
                "&byline=0"
              }
              width="560"
              height="700"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </LazyLoad>
      )
    }
  }
}

export default Slide
