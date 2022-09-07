import React from 'react'

const DiaryCard = ({emotion, description, id}) => {
  return (
    <article>
      <p>{id}</p>
      <h3>{emotion}</h3>
      <p>{description}</p>
    </article>
  )
}

export default DiaryCard;