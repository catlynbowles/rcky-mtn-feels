import React from 'react'

const FeelingsButton = ({id, key, name, secondaryEmotions, handleClick}) => {
  console.log(name)
  return (
    <button onClick={() => handleClick(name)}>{name}</button>
  )
}

export default FeelingsButton;