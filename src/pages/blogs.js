import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Blogs = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  // console.log(data)
  return (<Layout>
    <section className="blog-main">
      {blogs.map(blog => {
        return (
          <div key={blog.id} className="col">
            <figure>
              <Img fluid={blog.image[0].fluid} alt="blogimage" />
            </figure>
            <h3>{blog.title}</h3>
            <p>{blog.info}</p>
            <p>{blog.time}</p>
            <Link to={`/blogs/${blog.slug}`}>More Details</Link>
          </div>
        )
      })}
    </section>
  </Layout>)

}
export const data = graphql`
    {
      allContentfulBlog {
        nodes {
          childContentfulBlogDescriptionTextNode {
            description
          }
          time(fromNow: false)
         
           image {
            fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
            }
            }
          info
          title
          id
          slug
        }
      }
    }
  `
export default Blogs
