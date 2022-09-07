import React from 'react';

const InputForm = ({entryDescription, setEntryDescription, submitEntry, entryEmotion}) => {
  return (
    <form>
      <input
        type="text"
        value={entryDescription}
        onChange={(e) => setEntryDescription(e.target.value)}
        placeholder="Describe it, where you feel it in your body, what it feels like"
        aria-label="entry"
      />
      <input type="submit" value="Submit" onClick={() => submitEntry(entryEmotion, entryDescription)}></input>
    </form>
  )
}

export default InputForm;