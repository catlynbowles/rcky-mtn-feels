import React from 'react'
import './StatsBox.scss'
import PropTypes from 'prop-types'

const StatsBox = ({localTotals, globalTotals, secondaryEmotions}) => {
  const generateSecondaryEmotions = secondaryEmotions.length > 0 && secondaryEmotions.map(emotion => {
      return (
        <p className='small-header' key={emotion.name}>{emotion.name}</p>
      )
    })
  
  return (
    <div>
      <p className='totals'> {localTotals.toLocaleString()} others in your region.</p>
      <p className='totals'>{globalTotals.toLocaleString()} in the world.</p>
      {generateSecondaryEmotions.length > 1 && <div className='small-header'>You might also relate to: {generateSecondaryEmotions.slice(0, 3)}</div>}
    </div>
  )
}

export default StatsBox

StatsBox.propTypes = {
  localTotals: PropTypes.number.isRequired,
  globalTotals: PropTypes.number.isRequired
}

