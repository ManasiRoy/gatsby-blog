import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { Button } from '../Components/Button'

export default function BlogPost({ data }) {
  const post = data.contentfulBlog
  return (
    <Layout>
      <div className="blogInner">

        <Button><Link to="/blogs">Back to home</Link></Button>
        <h1>{post.title}</h1>
        <p>{post.description.description}</p>
        <p>{post.time}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query GetSingleBlogs($slug: String) {
  contentfulBlog(slug: {eq: $slug}) {
    id
    info
    title
    description {
      description
    }
    time(fromNow: false)
  }
}

`