import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
      <header className='header'>
        <h1 className='title'>Rocky Mountain Vibes</h1>
        <p className='line'>☆・゜゜・☆</p>
        <Nav />
      </header>
  )
}

export default Header;