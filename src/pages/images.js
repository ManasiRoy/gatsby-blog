import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../Components/Layout"


const getImages = graphql`
     {
        fixed: file(relativePath: {eq: "baby.webp"}) {
            childImageSharp {
            fixed(width: 400) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
            }
        }
        fluid: file(relativePath: {eq: "little-girl.webp"}) {
            childImageSharp {
            fluid {
                    src
                    srcSet
                    aspectRatio
                    base64
                    sizes
                }
            }
        }
    }
  `

const Images = () => {
    const data = useStaticQuery(getImages)
    //console.log(data)
    return (
        <Layout>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="single-image">
                            <h3>Fluid Image</h3>
                            <Image fluid={data.fluid.childImageSharp.fluid} />
                        </figure>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Images