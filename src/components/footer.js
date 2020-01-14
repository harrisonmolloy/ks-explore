import React from "react"
import { Link } from "gatsby"

export default props => {
  if (props.currentPage === "/") {
    return (
      <footer>
        <a href="https://katesylvester.com/" className="copyright">
          © 2019 Kate Sylvester New Zealand. All rights reserved.&nbsp;
        </a>
        <a href="#top">↑ Top</a>
      </footer>
    )
  } else {
    return (
      <footer>
        <Link to="/">← Back</Link>
        <a href="https://katesylvester.com/" className="copyright">
          © 2019 Kate Sylvester New Zealand. All rights reserved.&nbsp;
        </a>
      </footer>
    )
  }
}
