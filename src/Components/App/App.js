import { Component } from 'react'
import './App.scss';
import { getData } from '../../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import FeelingView from '../Views/FeelingView/FeelingView'
import Header from '../Header/Header'
import DiaryMode from '../DiaryMode/DiaryMode';
import { useState, useEffect } from 'react'
import HomeView from '../Views/HomeView/HomeView';

const App = () => {
  const [primaryEmotions, setPrimaryEmotions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
      .then(data => setPrimaryEmotions(data))
      .catch(error => setError(`${error}`))
  }, [])

  return (
    <div className='body'>
      <Header />
      <Route exact path='/'>
        <HomeView error={error} primaryEmotions={primaryEmotions} />
      </Route>
      <Route exact path='/diary' render={(() =>
        <DiaryMode primaryEmotions={primaryEmotions} />
      )}
      />
      <Route exact path={`/feeling/:name`} render={({ match }) => {
        return (
          <FeelingView id={match.params.name} />
        )
      }} />
    </div>
  )
}

export default App;

