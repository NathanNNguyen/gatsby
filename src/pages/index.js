import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

import Logo from '../images/restaurant.png'
import food from '../images/food.jpg'

import '../styles/app.css'

const IndexPage = () => (
  <Layout>
    <div className='flex justify-center bg-black pt-24 pb-24'>
      <img src={Logo} alt='logo' className='w-20 mr-3' />
      <h1 className='text-2xl text-gray-200 tracking-wider font-serif'>
        Let's eat.
      <br />
        But,
      <br />
        better!
      </h1>
    </div>
    <div className='flex max-w-full justify-center bg-gray-700 p-20'>
      <img className='w-2/5 rounded-lg mr-24' src={food} alt='logo' />
      <div className='ml-24 text-white tracking-wider'>
        <p className='text-gray-500 mb-2'>Getting started</p>
        <h2 className='text-4xl mb-3'>Welcome to Duyen Mai!</h2>
        <p className='mb-3 text-xl text-gray-400'>We are a restaurant that provides the best culinary experience drawn from pre-Viet cuisine of San Diego.</p>
        <p className='mb-3 text-xl text-gray-400'>Our dishes empasize the seasonality of local produce and we create a sustainable chain that allows us to bring new culinary experiences to our national and international clientes while combining cultures.</p>
        <p className='mb-3 text-xl text-gray-400'>Our goal is to take you on a journey around the flavors of Viet food, its unique ingredients, recipes and culinary techniques.</p>
        <br />
        <br />
        <br />
        <Link className='text-gray-300' to='/about'>Learn more</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
