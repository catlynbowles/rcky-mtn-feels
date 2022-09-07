import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
import FeelingView from '../Views/FeelingView/FeelingView'
import DiaryMode from '../DiaryMode/DiaryMode'
import ConnectView from '../Views/ConnectView/ConnectView';
import LandingView from '../Views/LandingView/LandingView'
import { getData } from '../../apiCalls';

const Routes = () => {
  const [primaryEmotions, setPrimaryEmotions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
      .then(data => setPrimaryEmotions(data))
      .catch(error => setError(`${error}`))
  }, [])

  return (
    <Switch>
      <Route exact path='/'>
        <LandingView />
      </Route>
      <Route exact path='/connect'>
        <ConnectView error={error} primaryEmotions={primaryEmotions} />
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
    </Switch>
  )
}

export default Routes;