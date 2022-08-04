import React from 'react'
import { Link } from 'react-router-dom'
import './FeelingsButton.css'
import Keyframes from '@keyframes/core'

const FeelingsButton = ({name}) => {
  return (
    <Link to={`/${name}`} style={{textDecoration: 'none'}}>
      <div className={`${name} feelingButton`}><p>{name}</p></div>
    </Link>
  )
}

export default FeelingsButton;