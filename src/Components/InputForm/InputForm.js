import React from 'react';
import './InputForm.scss'
import Dropdown from '../Dropdown/Dropdown';

const InputForm = ({primaryEmotions, handleSelect, entryDescription, setEntryDescription, submitEntry, entryEmotion}) => {
  return (
    <form className='form'>
      <Dropdown className='dropdown' primaryEmotions={primaryEmotions} handleSelect={handleSelect} />
      <input
        className='entry-text'
        type="text"
        value={entryDescription}
        onChange={(e) => setEntryDescription(e.target.value)}
        placeholder="Describe it, where you feel it in your body, what it feels like"
        aria-label="entry"
      />
      <input className='submit' type="submit" value="Submit" onClick={() => submitEntry(entryEmotion, entryDescription)}></input>
    </form>
  )
}

export default InputForm;