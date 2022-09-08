import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import backpack from '../../assets/20.png'
import lantern from '../../assets/23.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='together'>
        <img src={lantern} height='100' color='-1' />
        <h1 className='title'>Rocky Mountain Vibes</h1>
        <img src={backpack} height='100' color='-1' />
      </div>
      <Nav />
    </header>
  )
}

export default Header;