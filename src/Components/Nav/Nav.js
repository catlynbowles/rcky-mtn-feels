import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to='/' className='nav-link'>About</Link>
      <Link to='/diary' className='nav-link'>My Diary</Link>
      <Link to='/connect' className='nav-link'>Connect Me</Link>
    </nav>
  )
}

export default Nav;