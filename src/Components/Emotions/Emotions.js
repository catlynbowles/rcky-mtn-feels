import { render } from '@testing-library/react';
import React from 'react'
import FeelingsButton from '../Button/Button'
import './Emotions.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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

  const diaryStyle = {
    "color": 'white',
  }

  return (
    <section className='button-container'>
      {emotionalButtons}
    </section>
  )
}

export default Emotions;

Emotions.propTypes = {
  primaryEmotions: PropTypes.array.isRequired
}