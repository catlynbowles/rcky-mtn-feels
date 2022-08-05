import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../../apiCalls'
import { Link } from 'react-router-dom'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './FeelingView.css'
import '../Button/Button.css'
import LoadingIcon from '../../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'
import PropTypes from 'prop-types'
import ViewSubtitle from '../ViewSubtitle/ViewSubtitle'
import StatsBox from '../StatsBox/StatsBox'
import Footer from '../Footer/Footer'

class FeelingView extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: '',
      playlistsInfo: [], 
      globalTotals: '',
      error: ''
    }
  }

  getRandomPlaylists = (array) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    return selected
  }

  componentDidMount = () => {
    const localTotal = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.id}`)
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    
    Promise.all([localTotal, primaryGlobalTotals])
      .then(data => this.setState({localTotals: data[0][0].counts['northAmerica/mountain'], globalTotals: data[1][this.props.id]}))
      .catch(err => this.setState({error: `${err}`}))
  } 

  render() {
    return (
      <section className='page-container'>
        <article className='stats-container'>
          <ViewSubtitle id={this.props.id}/>
          {this.state.error ? <Error text={this.state.error}/> : 
          !this.state.localTotals && !this.state.globalTotals ? <LoadingIcon /> : 
          <StatsBox localTotals={this.state.localTotals} globalTotals={this.state.globalTotals} />}
        </article>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='feelingButton home-button'><p>Back</p></div>
        </Link>
        <Footer />
      </section>
    )
  }
}

export default FeelingView;

FeelingView.propTypes = {
  id: PropTypes.string.isRequired
}