import React from 'react'
import { Link } from 'react-router-dom'

const FeelingsButton = ({name}) => {
  return (
    <Link to={`/${name}`} style={{textDecoration: 'none'}}>
      <button>{name}</button>
    </Link>
  )
}

export default FeelingsButton;