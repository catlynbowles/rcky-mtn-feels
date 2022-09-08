import React from 'react';
import './InputForm.scss'
import Dropdown from '../Dropdown/Dropdown';

const InputForm = ({ primaryEmotions, handleSelect, entryDescription, setEntryDescription, submitEntry, entryEmotion, inputRef }) => {
  return (
    <form className='form'>
      <Dropdown className='dropdown' primaryEmotions={primaryEmotions} handleSelect={handleSelect} inputRef={inputRef}/>
      <textarea
        className='entry-text'
        type="text"
        value={entryDescription}
        onChange={(e) => setEntryDescription(e.target.value)}
        placeholder="Describe it, where you feel it in your body, what it feels like"
        aria-label="entry"
      />
      <input className='submit' type="submit" value="Submit" onClick={(e) => submitEntry(entryEmotion, entryDescription, e)}></input>
    </form>
  )
}

export default InputForm;