import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

import '../styles/app.css'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className='bg-gray-700 flex flex-col justify-center items-center p-12'>
        <h1 className='text-blue-400 text-3xl'>{post.frontmatter.title}</h1>
        <img className='w-1/6 m-10' src={post.frontmatter.img} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className='flex justify-center items-center'>
          <p className='w-2/4 m-20 leading-10 tracking-wider'>
            <span className='text-xl text-gray-300'>Ingredients:</span>
            <p className='text-gray-500'>{post.frontmatter.ingredients}</p>
          </p>
          <p className='w-2/4 m-20 leading-10 tracking-wider'>
            <span className='text-xl text-gray-300'>Instructions:</span>
            <p className='text-gray-500'>{post.frontmatter.instructions}</p>
          </p>
        </div>
        <Link to='/recipes' className='text-blue-300 text-2xl'>Go back</Link>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter:{path: {eq: $path}}){
      html
      frontmatter{
        path
        title
        author
        date
        img
        ingredients
        instructions
      }
    }
  }
`