import { render } from '@testing-library/react';
import React from 'react'
import FeelingsButton from '../FeelingsButton/FeelingsButton'

const Emotions = ({primaryEmotions, handleClick}) => {
  const emotionalButtons = primaryEmotions.map(emotion => {
    return (
      <FeelingsButton 
        id={emotion.path}
        key={emotion.path}
        name={emotion.name}
        secondaryEmotions={emotion.secondaryEmotions}
        handleClick={handleClick}
      />
    )
  })

  return (
    <section>
      {emotionalButtons}
    </section>
  )
}

export default Emotions; 