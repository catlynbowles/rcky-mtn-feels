import { Component } from 'react'
import './App.css';
import { getData } from '../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      primaryEmotions: [],
      emotionalGlobalTotals: {},
      timezoneEmotions: [],
      selectedEmotion: ''
    }
  } 

  componentDidMount = () => {
    const emotion = 'joy'
    const primaryEmotionData = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${emotion}`)

    Promise.all([primaryEmotionData, primaryGlobalTotals, localEmotionalTotals])
      .then(data => this.setState({primaryEmotions: data[0], emotionalGlobalTotals: data[1], timezoneEmotions: data[2]}))
  }

  render() {
    return (
      <main>
        <Emotions primaryEmotions={this.state.primaryEmotions}/>
      </main>
    )
  }
}

export default App;


