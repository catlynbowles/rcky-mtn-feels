import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
      <header className='header'>
        <div className='left-section'>
          <h1 className='title'>Rocky Mountain Vibes</h1>
          <p className='line'>☆・゜゜・☆</p>
        </div>
        <Nav />
      </header>
  )
}

export default Header;