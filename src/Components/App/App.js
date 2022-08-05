import { Component } from 'react'
import './App.css';
import { getData } from '../../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import FeelingView from '../FeelingView/FeelingView'
import LoadingIcon from '../../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Subtitle from '../Subtitle/Subtitle'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      primaryEmotions: [],
      error: ''
    }
  } 

  componentDidMount = () => {
    getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
      .then(data => this.setState({primaryEmotions: data}))
      .catch(error => {
        this.setState({error: `${error}`})
      })
  }

  render() {
    return (
      <body className='body'>
        <Header />
        <Route exact path='/' render={() => 
          <section>
            <Subtitle />
            {this.state.error ? <Error text={this.state.error}/> : !this.state.primaryEmotions.length ? <LoadingIcon/> : <Emotions primaryEmotions={this.state.primaryEmotions}/>}
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
}

export default App;

App.propTypes = {
  error: PropTypes.string.isRequired,
  primaryEmotions: PropTypes.array.isRequired
}

