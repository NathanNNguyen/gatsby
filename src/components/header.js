import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/app.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `linear-gradient(to right, rebeccapurple, #81e6d9)`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <span className='text-2xl text-white'>Home</span>
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: `none`,
          }}
        >
          <span className='text-2xl text-white'>About</span>
        </Link>
        <Link
          to="/blog"
          style={{
            textDecoration: `none`,
          }}
        >
          <span className='text-2xl text-white'>Blog</span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
