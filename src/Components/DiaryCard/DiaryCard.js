import React from 'react'
import './DiaryCard.scss'

const DiaryCard = ({emotion, description, id, deleteEntry}) => {
  return (
    <article className='diary-cards'>
      <p className='time'>{id}</p>
      <h3 className='e-title'>{emotion}</h3>
      <p className='description'>{description}</p>
      <button onClick={() => deleteEntry(id)}>remove memory</button>
    </article>
  )
}

export default DiaryCard;