import React from 'react'

const PlaylistCard = ({playlistImg, playlistName}) => {
  return (
    <div>
            <a>
            <img src={playlistImg}></img>
            </a>
            <p>{playlistName}</p>
          </div>
  )
}

export default PlaylistCard;