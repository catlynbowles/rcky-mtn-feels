import React from 'react'
import './ViewSubtitle.css'
import PropTypes from 'prop-types'

const ViewSubtitle = ({id}) => {
  return (
    <h2 className='small-header'>If you feel {id} today, you're not alone. There are:</h2>
  )
}

export default ViewSubtitle;

ViewSubtitle.propTypes = {
  id: PropTypes.string.isRequired
}