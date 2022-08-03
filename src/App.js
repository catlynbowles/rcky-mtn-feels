import { Component } from 'react'
import './App.css';
import { getData } from './apiCalls'
// const [mainEmotions, setMainEmotions] = useState([{
//   name: "",
//   path: "",
//   norms: {},
//   secondaryEmotions: []
// }])

class App extends Component { 
  constructor() {
    super()
    this.state = {
      theSevenEmotions : [],
      emotionalGlobalTotals: {},
      timezoneEmotions: []
    }
  } 

  componentDidMount = () => {
    const emotion = 'joy'
    const primaryEmotionData = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${emotion}`)

    Promise.all([primaryEmotionData, primaryGlobalTotals, localEmotionalTotals])
      .then(data => this.setState({theSevenEmotions: data[0], emotionalGlobalTotals: data[1], timezoneEmotions: data[2]}))
  }



  render() {
    return (
      <div>hi</div>
    )
  }
}

export default App;
