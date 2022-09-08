import React from 'react';
import './LandingView.scss'
import catlynPhoto from '../../../assets/CatlynB.jpeg';
import tentPhoto from '../../../assets/7.png';
import mtnPhoto from '../../../assets/9.png';

const LandingView = () => {
  return (
    <section className='about-section'>
      <h1 className='about-title'>About Rocky Mountain Vibes</h1>
      <div className='photo-text-container'>
        <img src={tentPhoto} height='500' />
        <div className='text-container'>
          <h3>The Mission</h3>
          <p className='about-description'>
            &emsp; The purpose of this project is to create a tool that helps us
            celebrate our own emotional capacity with others.
            At times, it’s too easy to feel intense emotions in isolation,
            promoting the false association that we are alone in feeling.
            The truth, however, is that we are never alone. This app helps the user build that connection.
            This app was created using React and was refactored to include the local storage feature in ‘Diary’.
            It relies heavily on the We Feel API, which calculates the totals displayed from tweets occuring throughout the world.
            As a frontend software engineer, I hope this will be one of many projects I work on that uses technology to help us connect to one another.
          </p>
        </div>
      </div>
      <div className='photo-text-container'>
        <div className='text-container'>
          <h3>Features</h3>
          <p className='about-description'>&emsp; The app includes several features.
            The ‘Diary’ tab allows a user to capture and save an emotional feeling.
            The feeling remains captured until one is removed.
            The ‘Connect’ feature allows the user to take their own emotional temperature,
            choosing one of the primary emotions. The user will then be navigated to a page
            which displays others in the MST time zone reporting feeling this same way,
            and also calculates the global total.</p>
        </div>
        <img src={mtnPhoto} height='500' />
      </div>
      <div className="photo-container">
        <img
          data-cy="catlyn"
          className='catlyn'
          src={catlynPhoto}
          alt="headshot of Catlyn"
        ></img>
        <a className='link' href="https://www.linkedin.com/in/catlyn-bowles/">Connect with me!</a>
      </div>
    </section>
  )
}

export default LandingView