import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Components/Layout"
import Img from "gatsby-image"


export default function BlogPost({ data }) {
  const post = data.contentfulBlog
  return (
    <Layout>
      <div className="blogInner py-5 container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/blogs" className="btn btn-secondary my-2">Back to home</Link>
            <Img fluid={post.image[0].fluid} alt="blogimage" className="mb-5" />
            <h1 className="text-secondary mb-4">{post.title}</h1>
            <p className="text-muted">{post.description.description}</p>
            <p className="text-muted">{post.time}</p>
          </div>
        </div>
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
    image 
    {
      fluid {
          base64
          aspectRatio
          sizes
          src
          srcSet
      }
    }
    description {
      description
    }
    time(fromNow: false)
  }
}

`