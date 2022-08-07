import { Component } from 'react'
import './App.css';
import { getData } from '../../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import FeelingView from '../FeelingView/FeelingView'
import LoadingIcon from '../../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Subtitle from '../Subtitle/Subtitle'
import {useState, useEffect} from 'react'
const App = () => { 
  const [primaryEmotions, setPrimaryEmotions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
      .then(data => setPrimaryEmotions(data))
      .catch(error => setError(`${error}`))
  }) 

    return (
      <body className='body'>
        <Header />
        <Route exact path='/' render={() => 
          <section>
            <Subtitle />
            {error ? <Error text={error}/> : !primaryEmotions.length ? <LoadingIcon/> : <Emotions primaryEmotions={primaryEmotions}/>}
          </section>
        }/>
        <Route path={`/:name`} render={({match}) => {
          return (
            <FeelingView id={match.params.name}/>
          )
        }}/>
      </body>
    )
}

export default App;

