import React from 'react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../useLocalStorage';

const DiaryMode = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <section>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </section>
  )
}

export default DiaryMode