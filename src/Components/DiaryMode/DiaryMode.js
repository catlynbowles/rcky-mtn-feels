import React from 'react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../useLocalStorage';
import Dropdown from '../Dropdown/Dropdown';
import DiaryCard from '../DiaryCard/DiaryCard';

const DiaryMode = ({primaryEmotions}) => {
  const [entryEmotion, setEntryEmotion] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] =  useLocalStorage([], "");

  const submitEntry = (entry) => {
    console.log(entry)
    setEntries([...entries, entry])
  }

  const handleSelect = (e) => {
    console.log(e)
    setEntryEmotion(e)
  }

  return (
    <section>
      <Dropdown primaryEmotions={primaryEmotions} handleSelect={handleSelect}/>
      <input
        type="text"
        value={entryDescription}
        onChange={(e) => setEntryDescription(e.target.value)}
        placeholder="Describe it, where you feel it in your body, what it feels like"
        aria-label="entry"
      />
      <input type="submit" value="Submit" onClick={() => submitEntry(entryEmotion, entryDescription)}></input>
    </section>
  )
}

export default DiaryMode