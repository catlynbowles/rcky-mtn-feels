import React from 'react'
import { Link } from 'react-router-dom'

const FeelingsButton = ({id, key, name, secondaryEmotions, handleClick}) => {
  return (
    <Link to={`/${name}`} style={{textDecoration: 'none'}}>
      <button onClick={() => handleClick(name)}>{name}</button>
    </Link>
  )
}

export default FeelingsButton;