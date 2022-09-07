import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link exact to='/' className='nav-link'>About</Link>
      <Link exact to='/diary' className='nav-link'>My Diary</Link>
      <Link exact to='/connect' className='nav-link'>Connect Me</Link>
    </nav>
  )
}

export default Nav;