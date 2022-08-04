import React from 'react'
import { withRouter } from 'react-router-dom';

const Error = ({text}) => {
  console.log(text)
  const errorStyle = {
    'color': 'white',
    'fontSize': '20px'
  }

  const errorContainer = {
    'display': 'flex',
    'alignItems': 'center',
    'textAlign': 'center',
    'justifyContent': 'center'
  }

  return (
    <section style={errorContainer}>
      <p className='error-text' style={errorStyle}><img src='http://i.stack.imgur.com/SBv4T.gif' height='30'/>Looks like we're having trouble loading this. ({text}) Check that your url is valid, and try another route!<img src='http://i.stack.imgur.com/SBv4T.gif' height='30'/></p>
    </section>
  )
}

export default Error;