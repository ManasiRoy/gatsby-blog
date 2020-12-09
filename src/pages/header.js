import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import "../Components/styles.scss"

const myData = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        description
      }
    }
  } = useStaticQuery(myData)
  return (
    <div className="main">
      <hr />
      <h1>Title: {title}</h1>
      <hr />
      <h2>Description: </h2>
      <p>{description}</p>
    </div>
  )
}

export default Header
