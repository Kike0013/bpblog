import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>BP Blog</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>CreateBlog</Link>
      </div>
    </nav>
  )
}

export default Navbar