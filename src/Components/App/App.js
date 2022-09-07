import './App.scss';
import { getData } from '../../apiCalls'
import Header from '../Header/Header';
import { useState, useEffect } from 'react'
import Routes from '../Routes/Routes';

const App = () => {
  return (
    <main className='main'>
      <Header />
      <Routes />
    </main>
  )
}

export default App;

