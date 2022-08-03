import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../apiCalls'

class MainFeelingPage extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: 0
    }
  }

  globalEmotion = () => {
    return this.props.globalTotals[this.props.userEmotion]
  }

  componentDidMount = () => {
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.userEmotion}`)
      .then(data => data[0].counts['northAmerica/mountain'])
      .then(data => this.setState({localTotals: data}))
      .then(data => console.log(data))
  } 

  render() {
    return (
      <section>
        <h2>If you feel {this.props.userEmotion} today...</h2>
        <p>Know that there are others that feel the same way:</p>
        <p>{this.state.localTotals} in your region</p>
        <p>{this.globalEmotion()} in your world</p>
      </section>
    )
  }
}

export default MainFeelingPage;