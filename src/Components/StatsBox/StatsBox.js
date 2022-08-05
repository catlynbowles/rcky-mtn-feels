import React from 'react'
import './StatsBox.css'

const StatsBox = ({localTotals, globalTotals}) => {
  return (
    <div>
      <p className='totals'> {localTotals.toLocaleString()} others in your region.</p>
      <p className='totals'>{globalTotals.toLocaleString()} in the world.</p>
    </div>
  )
}

export default StatsBox