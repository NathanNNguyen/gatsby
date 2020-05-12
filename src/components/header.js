import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/app.css'
import Github from '../images/github.png'
import Twitter from '../images/twitter.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'

const Header = ({ siteTitle }) => (
  <header className='m-0 bg-black'>
    <div className='flex justify-between items-center m-0 ml-auto mr-auto max-w-screen-lg pt-6 pb-6 pr-4 pl-4'>
      <div className='flex justify-around w-1/3'>
        <Link className='no-underline' to="/">
          <span className='text-xl text-gray-200'>Home</span>
        </Link>
        {/* <Link className='no-underline' to="/about">
          <span className='text-xl text-gray-200'>About</span>
        </Link> */}
        <Link className='no-underline' to="/recipes">
          <span className='text-xl text-gray-200'>Dishes</span>
        </Link>
      </div>
      <div className='flex justify-between w-1/3'>
        <Link to='/'>
          <img src={Facebook} alt='facebook' className='w-4' />
        </Link>
        <Link to='/'>
          <img src={Twitter} alt='twitter' className='w-4' />
        </Link>
        <Link to='/'>
          <img src={Instagram} alt='instagram' className='w-4' />
        </Link>
        <Link to='/'>
          <img src={Github} alt='git' className='w-4' />
        </Link>
      </div>
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
