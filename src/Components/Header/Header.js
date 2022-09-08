import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'
import backpack from '../../assets/20.png'
import lantern from '../../assets/23.png'
import '../../Styles/variables.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='together'>
        <img src={lantern} height='100' alt='lantern' tabIndex='0'/>
        <h1 className='title' tabIndex='0'>Rocky Mountain Vibes</h1>
        <img src={backpack} height='100' tabIndex='0' />
      </div>
      <Nav />
    </header>
  )
}

export default Header;