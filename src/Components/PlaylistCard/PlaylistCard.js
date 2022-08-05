import React from 'react'
import PropTypes from 'prop-types'

const PlaylistCard = ({playlistImg, playlistName, uri}) => {
  return (
    <div>
      <a href={uri}>
      <img src={playlistImg}></img>
      </a>
      {playlistName}
    </div>
  )
}

export default PlaylistCard;

PlaylistCard.propTypes = {
  playlistImg: PropTypes.string.isRequired, 
  playlistName: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired
}