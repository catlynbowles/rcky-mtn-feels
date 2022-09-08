import React from 'react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../useLocalStorage';
import Dropdown from '../Dropdown/Dropdown';
import DiaryEntries from '../DiaryEntries/DiaryEntries';
import './DiaryMode.scss'
import InputForm from '../InputForm/InputForm';

const DiaryMode = ({ primaryEmotions }) => {
  const [entryEmotion, setEntryEmotion] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] = useLocalStorage([], "");

  const submitEntry = (emotion, description) => {
    console.log(emotion, description)
    const newEntry = {
      id: Date().toLocaleString().substr(0, 24),
      emotion: emotion,
      description: description
    }
    setEntries([...entries, newEntry])
  }

  const handleSelect = (e) => {
    setEntryEmotion(e)
  }

  return (
    <section className='form-diary'>
      <InputForm primaryEmotions={primaryEmotions} handleSelect={handleSelect} entryDescription={entryDescription} setEntryDescription={setEntryDescription} submitEntry={submitEntry} entryEmotion={entryEmotion} />
      {entries.length ? <DiaryEntries entries={entries} /> : <h3>No entries to display. Add one above!</h3>}
    </section>
  )
}

export default DiaryMode