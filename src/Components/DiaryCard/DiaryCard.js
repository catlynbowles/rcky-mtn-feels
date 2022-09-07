import React from 'react'
import './DiaryCard.scss'

const DiaryCard = ({emotion, description, id}) => {
  return (
    <article className='diary-cards'>
      <p className='time'>{id}</p>
      <h3 className='e-title'>{emotion}</h3>
      <p className='description'>{description}</p>
    </article>
  )
}

export default DiaryCard;