import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/app.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className='text-4xl m-4 ml-0'>Welcome to my gatsby site</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda at, labore minima voluptatibus corporis aut odit adipisci rerum, eum veniam. Nesciunt, tempora perferendis? Qui eaque accusantium architecto amet ullam.</p>
  </Layout>
)

export default IndexPage
