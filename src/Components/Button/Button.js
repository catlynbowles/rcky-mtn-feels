import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
import '../../Styles/variables.scss'

const FeelingsButton = ({ name }) => {
  return (
    <Link exact='true' to={`/feeling/${name}`} style={{ textDecoration: 'none' }}>
      <div className={`${name} feelingButton`} ><p tabIndex='0'>{name}</p></div>
    </Link>
  )
}

export default FeelingsButton;

FeelingsButton.propType = {
  name: PropTypes.string.isRequired
}