import React from 'react'
import './StatsBox.css'
import PropTypes from 'prop-types'

const StatsBox = ({localTotals, globalTotals}) => {
  return (
    <div>
      <p className='totals'> {localTotals.toLocaleString()} others in your region.</p>
      <p className='totals'>{globalTotals.toLocaleString()} in the world.</p>
    </div>
  )
}

export default StatsBox

StatsBox.propTypes = {
  localTotals: PropTypes.number.isRequired,
  globalTotals: PropTypes.number.isRequired
}

