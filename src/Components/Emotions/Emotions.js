import React from 'react'
import FeelingsButton from '../Button/Button'
import './Emotions.scss'
import PropTypes from 'prop-types'

const Emotions = ({ primaryEmotions }) => {
  const emotionalButtons = primaryEmotions.map(emotion => {
    return (
      <FeelingsButton
        id={emotion.path}
        key={emotion.path}
        name={emotion.name}
      />
    )
  })

  return (
    <div>
      <h1 className='subtitle'>What are you feeling today? </h1>
      <section className='button-container'>
        {emotionalButtons}
      </section>
    </div>
  )
}

export default Emotions;

Emotions.propTypes = {
  primaryEmotions: PropTypes.array.isRequired
}