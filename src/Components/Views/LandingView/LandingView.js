import React from 'react';
import './LandingView.scss'

const LandingView = () => {
  return (
    <section className='about-section'>
      <h1 className='about-title'>About Rocky Mountain Vibes</h1>
      <p className='about-description'>&emsp; The purpose of this project is to create a tool that helps us celebrate our own emotional capacity with others. At times, it’s too easy to feel intense emotions in isolation, promoting the false association that we are alone in feeling. The truth, however, is that we are never alone. This app helps the user build that connection. <br></br><br></br>

      &emsp; The app includes several features. The ‘My Diary’ tab allows a user to capture and save an emotional feeling. The feeling remains captured until the ‘reset’ button is clicked. The ‘Connect Me’ feature allows the user to take their own emotional temperature, choosing one of the primary emotions. The user will then be navigated to a page which displays others in the MST time zone reporting feeling this same way, and also calculates the global total.<br></br><br></br>

      &emsp; This app was created using React and was refactored to include the local storage feature in ‘My Diary’. It relies heavily on the We Feel API, which calculates the totals displayed from tweets occuring throughout the world. As a frontend software engineer, I hope this will be one of many projects I work on that uses technology to help us connect to one another.
      </p>
    </section>
  )
}

export default LandingView