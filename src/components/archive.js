import React from "react"
import Collection from "./collection.js"

class Archive extends React.Component {
  render() {
    // store raw array from graph ql in new const
    const qlData = this.props.data.images.image
    // console.log(qlData)

    // simplify raw data into an array of objects
    const abData = qlData.map((node, i) => {
      return node.node
    })
    // console.log(abData)

    //filter out null nodes
    const filteredData = abData.filter(node => node.childImageSharp != null)
    // console.log(filteredData)

    // initiate collection object to group image data by relative directory into
    let collections = {}
    // console.log(collections)

    // create an empty array for each unique directory (Could gain performance here)
    filteredData.forEach((node, i) => {
      collections[node.relativeDirectory] = []
    })
    // console.log(collections)

    // copy image data into corrosponding directory array
    filteredData.forEach((node, i) => {
      collections[node.relativeDirectory].push(node.childImageSharp.fixed)
    })
    // console.log(collections)

    // convert object of arrays into an array of arrays so we can sort and map over it
    const entries = Object.entries(collections).sort()
    // console.log(entries)

    // create a collection component for each directory array and pass in corrosponding image data
    const jsxCollections = entries.map((node, i) => {
      return <Collection key={i} data={node} />
    })
    // console.log(jsxCollections)

    // render collection components as children of this archive component
    return (
      <div className="archive">
        <div className="archive-copy">{this.props.children}</div>
        {jsxCollections}
      </div>
    )
  }
}

export default Archive

// notes

// im going to be losing a lot of preformance iterating over these big arrays over and over
