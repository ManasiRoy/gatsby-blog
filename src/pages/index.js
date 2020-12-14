import React from 'react'
import Layout from '../Components/Layout'
import { Button } from '../Components/Button'
import "../Components/styles.scss"
import Header from './header'

const index = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center px-0">
              <h1 className="display-4 font-italic text-white">Longer featured blog post</h1>
              <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
            </div>
          </div>
        </div>
        <Button> Button from Styled Component</Button>
        <Header />

      </div>
    </Layout>
  )
}
export default index