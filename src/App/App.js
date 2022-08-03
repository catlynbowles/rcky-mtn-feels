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
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${emotion}`)

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
        <MainFeelingPage userEmotion={this.state.userEmotion} globalTotals={this.state.globalTotals}/>
      </main>
    )
  }
}

{/* <Route exact path='/:userEmotion' render={({match}) => 
  <MainFeelingPage userFeeling={match.params.userEmotion}/>
}/> */}
export default App;


