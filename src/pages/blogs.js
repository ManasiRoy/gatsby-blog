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
    <section className="blog-main py-5">
      <div className="container">
        <div className="row">
          {blogs.map(blog => {
            return (
              <div className="col-md-4 mb-4" key={blog.id}>
                <div className="card">
                  <Img fluid={blog.image[0].fluid} alt="blogimage" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{blog.title}</h3>
                    <p className="card-text">{blog.info}</p>
                    <p className="card-text">{blog.time}</p>
                    <Link to={`/blogs/${blog.slug}`} className="btn btn-info">More Details</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
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
