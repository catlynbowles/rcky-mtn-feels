import React from 'react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../useLocalStorage';
import Dropdown from '../Dropdown/Dropdown';
import DiaryEntries from '../DiaryEntries/DiaryEntries';

const DiaryMode = ({primaryEmotions}) => {
  const [entryEmotion, setEntryEmotion] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] =  useLocalStorage([], "");

  const submitEntry = (emotion, description) => {
    console.log(emotion, description)
    const newEntry = {
      id: Date().toLocaleString(),
      emotion: emotion, 
      description: description
    }
    setEntries([...entries, newEntry])
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
      <DiaryEntries entries={entries}/>
      <input type="submit" value="Submit" onClick={() => submitEntry(entryEmotion, entryDescription)}></input>
    </section>
  )
}

export default DiaryMode