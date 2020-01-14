import React from "react"
import Logo from "../svgs/kate-sylvester-neue.svg"
import { Link } from "gatsby"

class Nav extends React.Component {
  render() {
    // create an array of nav items from siteMetadata
    //

    let navData = this.props.data.site.siteMetadata.navConfig.navItems

    // specify active link in data
    for (var i = 0; i < navData.length; i++) {
      if (navData[i].link === this.props.currentPage) {
        navData[i].active = true
      }
    }

    //map over objects creating an array of jsx links
    const navItems = navData.map((node, i) => {
      let className = node.active ? "active" : "inactive"
      if (!node.internal) {
        return (
          <a
            key={i}
            href={node.link}
            className={className + " external"}
            target="_blank"
          >
            {node.title}
          </a>
        )
      } else if (node.internal) {
        return (
          <Link key={i} to={node.link} className={className + " internal"}>
            {node.title}
          </Link>
        )
      }
      return 1
    })

    const exNavItems = navItems.filter((node, index) => {
      return node.type === "a"
    })

    const inNavItems = navItems.filter((node, index) => {
      return node.type !== "a"
    })

    // return array of nav items to be rendered
    return (
      <header>
        <Link to="/#top">
          <Logo className="logo" />
        </Link>
        <nav>
          {inNavItems}
          {exNavItems}
        </nav>
      </header>
    )
  }
}

export default Nav
