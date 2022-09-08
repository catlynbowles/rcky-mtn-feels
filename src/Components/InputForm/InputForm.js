import React from 'react';
import './InputForm.scss'
import Dropdown from '../Dropdown/Dropdown';
import compass from '../../assets/22.png'
import moon from '../../assets/19.png'


const InputForm = ({ primaryEmotions, handleSelect, entryDescription, setEntryDescription, submitEntry, entryEmotion, inputRef }) => {
  return (
    <form className='form' onSubmit={(e) => submitEntry(entryEmotion, entryDescription, e)}> 
      <div className='sub-container'>
        <img src={compass} height='100' alt='compass' tabIndex='0'/>
        <h3 className='subtitle' tabIndex='0'>Capture an Emotion</h3>
        <img src={moon} height='100' alt='moon picture' tabIndex='0'/>
      </div>
      <Dropdown className='dropdown' primaryEmotions={primaryEmotions} handleSelect={handleSelect} inputRef={inputRef} />
      <textarea
        className='entry-text'
        type="text"
        value={entryDescription}
        onChange={(e) => setEntryDescription(e.target.value)}
        placeholder="Describe this feeling. Where do you feel it ? What are your thoughts about it ?"
        aria-label="entry"
        required
      />
      <input className='submit' type="submit" value="Submit" ></input>
    </form>
  )
}

export default InputForm;