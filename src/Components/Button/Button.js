import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const FeelingsButton = ({name}) => {
  return (
    <Link to={`/${name}`} style={{textDecoration: 'none'}}>
      <div className={`${name} feelingButton`}><p>{name}</p></div>
    </Link>
  )
}

export default FeelingsButton;

FeelingsButton.propType = {
  name: PropTypes.string.isRequired
}