import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import tree from '../../assets/23.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='together'>
        <img src={tree} height='100' color='-1' />
        <h1 className='title'>Rocky Mountain Vibes</h1>
        <img src={tree} height='100' color='-1' />
      </div>
      <Nav />
    </header>
  )
}

export default Header;