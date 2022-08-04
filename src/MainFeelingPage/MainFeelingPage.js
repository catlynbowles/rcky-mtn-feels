import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../apiCalls'
import { Link } from 'react-router-dom'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import './MainFeelingPage.css'
import '../FeelingsButton/FeelingsButton.css'
import LoadingIcon from '../LoadingIcon/LoadingIcon'

class MainFeelingPage extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: '',
      playlistsInfo: [], 
      globalTotals: ''
    }
  }

  getGlobalTotal = () => {
    if (this.state.globalTotals.length >1) {
      return this.state.globalTotals[this.props.id]
    }
  }

  getRandomPlaylists = (array) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    return selected
  }

  generatePlaylistInfo = () => {
    let samplePlaylists = this.getRandomPlaylists(this.state.playlistsInfo)
    if (this.state.playlistsInfo.length > 1) { 
      const playlistCards = samplePlaylists.map(playlist => {
        let playlistImg = playlist['data'].images['items'][0].sources[0].url
          return (
            <PlaylistCard 
              playlistImg={playlistImg}
              playlistName={playlist['data'].name}
              uri={playlist['data'].uri}
            />
          )
      })
      return playlistCards
    }
  }

  componentDidMount = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c000080a0amsh715f90a5bf2339cp1f2e77jsne099d3a6af4b',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    const localTotal = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.id}`)
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    
    Promise.all([localTotal, primaryGlobalTotals])
      .then(data => this.setState({localTotals: data[0][0].counts['northAmerica/mountain'], globalTotals: data[1][this.props.id]}))
    
    // getData(`https://spotify23.p.rapidapi.com/search/?q=%3C${this.props.id.toUpperCase()}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
      // .then(data => this.setState({playlistsInfo: data.playlists.items}))
  } 

  render() {
    return (
      <section className='page-container'>
        <article className='stats-container'>
          <h2 className='small-header'>If you feel {this.props.id} today...</h2>
          <h2 className='small-header'>You're not alone. There are:</h2>
          {!this.state.localTotals && !this.state.globalTotals ? <LoadingIcon/> : <div><p className='totals'> {this.state.localTotals.toLocaleString()} others in your region.</p>
          <p className='totals'>{this.state.globalTotals.toLocaleString()} in the world.</p></div>}
        </article>
          {this.state.playlistsInfo.length > 1 && <div><p className='small-header'>Tunes To Help You Feel It</p>
        <div className='playlist-container'> {this.generatePlaylistInfo()}
        </div></div>}
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='feelingButton home-button'><p>Back</p></div>
        </Link>
      </section>
    )
  }
}

export default MainFeelingPage;