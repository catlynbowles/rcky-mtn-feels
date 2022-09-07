import { Component } from 'react'
import './App.scss';
import { getData } from '../../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import FeelingView from '../Views/FeelingView/FeelingView'
import LoadingIcon from '../../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Subtitle from '../Subtitle/Subtitle'
import DiaryMode from '../DiaryMode/DiaryMode';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
        <HomeView error={error} primaryEmotions={primaryEmotions}/>
      </Route>
      <Route exact path='/33' render={(() =>
        <DiaryMode />
      )}
      />
      <Route exact path={`/feeling/:name`} render={({ match }) => {
        console.log(match)
        return (
          <FeelingView id={match.params.name} />
        )
      }} />
    </div>
  )
}

export default App;

