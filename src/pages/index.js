import React from "react"
import Layout from "../components/layout"

import Logo from '../images/restaurant.png';

import '../styles/app.css'

const IndexPage = () => (
  <Layout>
    <div className='flex bg-black pt-32 pb-32'>
      <img src={Logo} alt='logo' className='w-6 h-10' />
      <h1 className='text-2xl text-gray-400'>Welcome to the healthy life style!</h1>
    </div>
  </Layout>
)

export default IndexPage
