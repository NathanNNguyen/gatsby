import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

import '../styles/app.css'

const blog = ({ data }) => (
  <Layout>
    <div className='flex justify-around flex-wrap bg-gray-700'>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className='w-1/3 flex flex-col justify-center items-center p-3 text-gray-200 m-10 mt-0 leading-8'>
          <strong className='text-2xl text-blue-400 mb-8 mt-2'>{post.node.frontmatter.title}</strong>
          <p className='tracking-wider text-gray-400'>Ingredients: {post.node.frontmatter.ingredients}</p>
          <Link to={post.node.frontmatter.path} className='text-blue-400'>Instructions</Link>
          <small className='tracking-wider text-black'>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges{
        node {
          id
          frontmatter{
            path
            title
            date
            author
            ingredients
          }
        }
      }
    }
  }
`

export default blog
