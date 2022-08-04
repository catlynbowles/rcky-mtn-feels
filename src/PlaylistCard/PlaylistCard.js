import React from 'react'

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