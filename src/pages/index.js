import React from 'react'
import Layout from '../Components/Layout'
import { Button } from '../Components/Button'
import "../Components/styles.scss"
import Header from './header'

const index = () => {
  return (
    <Layout>
      <Header />
      <Button> Button from Styled Component</Button>
    </Layout>
  )
}
export default index