import React from "react"
import SiteMetadata from "../components/sitemetadata.js"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"
import MobileWarning from "../components/mobilewarning.js"

class Layout extends React.Component {
  render() {
    return (
      <>
        <SiteMetadata />
        <MobileWarning />

        <div className="main-wrapper">
          <div id="top"></div>
          <div className="main-container">
            <Nav data={this.props.data} currentPage={this.props.currentPage} />

            {this.props.children}

            <Footer currentPage={this.props.currentPage} />
          </div>
        </div>
      </>
    )
  }
}

export default Layout
