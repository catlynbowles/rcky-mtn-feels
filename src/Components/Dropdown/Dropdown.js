import React from 'react'

const Dropdown = ({ primaryEmotions, handleSelect }) => {
  let dropdownItems = primaryEmotions.map(emotion => {
    return (
      <option key={emotion.name} value={emotion.name}>{emotion.name}</option>
    )
  })
  return (
    <select className='dropdown' onChange={(e) => handleSelect(e.target.value)}>
      <option>I'm feeling...</option>
      {dropdownItems}
    </select>
  )
}

export default Dropdown;