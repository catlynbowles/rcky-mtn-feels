import React from 'react'
import PropTypes from 'prop-types'
import './Error.scss'

const Error = ({text}) => {
  console.log(text)
  return (
    <section className='error-container'>
      <p className='error-text' tabIndex='0'>
        <img src='http://i.stack.imgur.com/SBv4T.gif' height='30' tabIndex='0' className='loading-guys'/>Looks like we're having trouble loading this. ({text}) Checkout a different tab!<img src='http://i.stack.imgur.com/SBv4T.gif' height='30' className='loading-guys'/>
      </p>
    </section>
  )
}

export default Error;

Error.propTypes = {
  text: PropTypes.string.isRequired
}