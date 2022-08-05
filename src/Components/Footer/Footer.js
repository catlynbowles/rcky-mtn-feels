import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='text-info'>Totals are pulled from the We Feel API, which calculates incidences of emotions from tweets occuring in different areas across the world. Local totals for Rocky Mountain VibeCheck are calculated for MST time zone only. For more information, visit https://wefeel.csiro.au/main/#/.</footer>
  )
}

export default Footer;