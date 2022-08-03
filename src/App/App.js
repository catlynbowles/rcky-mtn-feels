import { Component } from 'react'
import './App.css';
import { getData } from '../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import MainFeelingPage from '../MainFeelingPage/MainFeelingPage'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      primaryEmotions: [],
      globalTotals: {},
      timezoneEmotions: [],
      userEmotion: ''
    }
  } 

  componentDidMount = () => {
    const emotion = 'joy'
    const primaryEmotionData = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.state.userEmotion}`)

    Promise.all([primaryEmotionData, primaryGlobalTotals, localEmotionalTotals])
      .then(data => this.setState({primaryEmotions: data[0], globalTotals: data[1], timezoneEmotions: data[2]}))
  }

  handleClick = (name) => {
    this.setState({userEmotion: name})
  }

  render() {
    return (
      <main>
        <h1>VibeCheck</h1>
        <Route exact path='/' render={() => 
          <div>
            <h3>What are you feeling today?</h3>
            <Emotions primaryEmotions={this.state.primaryEmotions} handleClick={this.handleClick}/>
          </div>
        }/>
        <Route path={`/:name`} render={({match}) => {
          console.log(match)
          return (
            <MainFeelingPage id={match.params.name} globalTotals={this.state.globalTotals} />
          )
        }
      
        }/>
      </main>
    )
  }
}

export default App;


