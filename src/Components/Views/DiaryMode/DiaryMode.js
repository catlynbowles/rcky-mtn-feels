import React, { useRef } from 'react'
import { useState } from 'react'
import { useLocalStorage } from '../../../useLocalStorage'
import DiaryEntries from '../../DiaryEntries/DiaryEntries';
import './DiaryMode.scss'
import InputForm from '../../InputForm/InputForm';

const DiaryMode = ({ primaryEmotions }) => {
  const [entryEmotion, setEntryEmotion] = useState('');
  const [entryDescription, setEntryDescription] = useState('');
  const [entries, setEntries] = useLocalStorage('', "");
  const inputRef = useRef(null);

  const submitEntry = (emotion, description, e) => {
    e.preventDefault();
    console.log(emotion, description)
    const newEntry = {
      id: Date().toLocaleString().substr(0, 24),
      emotion: emotion,
      description: description
    }
    setEntries([...entries, newEntry])
    clearEntry()
  }

  const deleteEntry = (id) => {
    console.log(id)
    const filteredEntries = entries.filter(entry => entry.id !== id)
    setEntries(filteredEntries)
  }

  const handleSelect = (e) => {
    setEntryEmotion(e)
  }

  const clearEntry = () => {
    setEntryDescription('')
    setEntryEmotion('')
    inputRef.current.value = '';
  }

  return (
    <section className='form-diary'>
      <InputForm inputRef={inputRef} primaryEmotions={primaryEmotions} handleSelect={handleSelect} entryDescription={entryDescription} setEntryDescription={setEntryDescription} submitEntry={submitEntry} entryEmotion={entryEmotion} />
      {entries.length ? <DiaryEntries entries={entries} deleteEntry={deleteEntry} /> : <h3 className='empty-display'>No entries to display. Add one above!</h3>}
    </section>
  )
}

export default DiaryMode