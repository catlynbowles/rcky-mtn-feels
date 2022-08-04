import { render } from '@testing-library/react'
import React, {Component} from 'react'
import { getData }from '../apiCalls'
import { Link } from 'react-router-dom'
import PlaylistCard from '../PlaylistCard/PlaylistCard'

class MainFeelingPage extends Component {
  constructor() {
    super()
    this.state = {
      localTotals: '',
      playlistsInfo: []
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

    const timepointData = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${this.props.id}`)
    const playlistData = getData(`https://spotify23.p.rapidapi.com/search/?q=%3C${this.props.id.toUpperCase()}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
    
    Promise.all([timepointData, playlistData])
      .then(data => this.setState({localTotals: data[0][0].counts['northAmerica/mountain'], playlistsInfo: data[1].playlists.items}))
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
        <p>Some tunes to help you feel it {this.generatePlaylistInfo()}</p>
        {this.generateSecondaryEmotions()}
      </section>
    )
  }
}

export default MainFeelingPage;