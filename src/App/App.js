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
    }
  } 

  componentDidMount = () => {
    const primaryEmotionData = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')

    Promise.all([primaryEmotionData, primaryGlobalTotals])
      .then(data => this.setState({primaryEmotions: data[0], globalTotals: data[1]}))
  }

  render() {
    return (
      <body className='body'>
        <h1>VibeCheck</h1>
        <Route exact path='/' render={() => 
          <div>
            <h3>What are you feeling today?</h3>
            <Emotions primaryEmotions={this.state.primaryEmotions}/>
          </div>
        }/>
        <Route path={`/:name`} render={({match}) => {
          return (
            <MainFeelingPage id={match.params.name} globalTotals={this.state.globalTotals} primaryEmotions={this.state.primaryEmotions}/>
          )
        }
      
        }/>
      </body>
    )
  }
}

export default App;


