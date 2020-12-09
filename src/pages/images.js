import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"


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
            <section className="images">
                <figure className="single-image">
                    <h3>Fixed Image</h3>
                    <Image fixed={data.fixed.childImageSharp.fixed} />
                </figure>
                <figure className="single-image">
                    <h3>Fluid Image</h3>
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                </figure>
            </section>
        </Layout>
    )
}

export default Images