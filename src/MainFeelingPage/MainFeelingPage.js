import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../apiCalls'

class MainFeelingPage extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: ''
    }
  }

  globalEmotion = () => {
    console.log(this.props.id, 'match')
    return this.props.globalTotals[this.props.id]
  }

  componentDidMount = () => {
    const localEmotionalTotals = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.id}`)
      .then(data => data[0].counts['northAmerica/mountain'])
      .then(data => this.setState({localTotals: data}))
  } 

  render() {
    return (
      <section>
        <h2>If you feel {this.props.id} today...</h2>
        <p>Know that there are others that feel the same way:</p>
        <p>{this.state.localTotals} in your region</p>
        <p>{this.globalEmotion()} in your world</p>
      </section>
    )
  }
}

export default MainFeelingPage;