import React from 'react';
import DiaryCard from '../DiaryCard/DiaryCard';
import './DiaryEntries.scss'

const DiaryEntries = ({ entries, deleteEntry }) => {
  let diaryCards = entries.map(entry => {
    return (
      <DiaryCard
        id={entry.id}
        description={entry.description}
        emotion={entry.emotion}
        key={entry.id}
        deleteEntry={deleteEntry}
      />
    )
  })
  return (
    <article className='card-container'>
      {diaryCards}
    </article>
  )
}

export default DiaryEntries;