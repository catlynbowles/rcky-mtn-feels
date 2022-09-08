import React from 'react'
import './DiaryCard.scss'

const DiaryCard = ({emotion, description, id, deleteEntry}) => {
  return (
    <article className='diary-cards'>
      <p className='time' tabIndex='0'>{id}</p>
      <h3 className='e-title' tabIndex='0'>{emotion}</h3>
      <p className='description' tabIndex='0'>{description}</p>
      <button className='delete' onClick={() => deleteEntry(id)}>remove memory</button>
    </article>
  )
}

export default DiaryCard;