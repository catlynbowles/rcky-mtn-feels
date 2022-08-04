import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../apiCalls'
import { Link } from 'react-router-dom'

class MainFeelingPage extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: ''
    }
  }

  getGlobalTotal = () => {
    return this.props.globalTotals[this.props.id]
  }

  generateSecondaryEmotions = () => {
    if (this.props.primaryEmotions.length > 1) {
      const userInfo = this.props.primaryEmotions.find(emotion => emotion.name === this.props.id)
      const generateSecondaries = userInfo.secondaryEmotions.map(emotion => emotion !== 'other' && <p key={emotion}>{emotion}</p>)
      return generateSecondaries.length > 1 && <div><h3>You might also be feeling...</h3>{generateSecondaries}</div>
    }
  }

  componentDidMount = () => {
    getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.id}`)
    .then(data => this.setState({localTotals: data[0].counts['northAmerica/mountain']}))
  } 

  render() {
    return (
      <section>
        <h2>If you feel {this.props.id} today...</h2>
        <p>Know that there are others that feel the same way:</p>
        <p>{this.state.localTotals} in your region.</p>
        <p>{this.getGlobalTotal()} in the world.</p>
        <Link to='/'>
          <button>Feelin' something else</button>
        </Link>
        {this.generateSecondaryEmotions()}
      </section>
    )
  }
}

export default MainFeelingPage;