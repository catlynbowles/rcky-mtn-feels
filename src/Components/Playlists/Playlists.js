import React, { Component } from 'react'
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import { getData } from '../../apiCalls'

class Playlists extends Component {
  constructor() {
    super()
    this.state = {
      playlistInfo: []
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
    getData(`https://spotify23.p.rapidapi.com/search/?q=%3C${this.props.id.toUpperCase()}%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
      .then(data => this.setState({playlistInfo: data.playlists.items}))
  }

  getRandomPlaylists = (array) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    return selected
  }

  generatePlaylistInfo = () => {
    let samplePlaylists = this.getRandomPlaylists(this.state.playlistInfo)
    if (this.state.playlistInfo.length > 1) { 
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

  render() {
    return (
      <section>
        {this.state.playlistInfo.length > 1 && 
        <div><p className='small-header'>Tunes To Help You Feel It</p>
        <article className='playlist-container'> {this.generatePlaylistInfo()}
        </article>
        </div>}
      </section>
    )
  }
}

export default Playlists