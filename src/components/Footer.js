import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faInstagram, faLinkedin, faGithub, faMedium, faEnvelope, faHome);
const Footer = () => {
  return(
    <footer className='footer'>
    <div className='footer-icons'>

    <a href='https://smithfn1012.netlify.com/'><FontAwesomeIcon icon={faHome} size="2x" /></a>

    <a href='https://www.linkedin.com/in/felicia-smith-6a02661ab/'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

    <a href='https://github.com/Smithfn1012'><FontAwesomeIcon icon={faGithub} size="2x" /></a>

    <a href='https://medium.com/@Smithfn1012'><FontAwesomeIcon icon={faMedium} size="2x" /></a>

    <a href='https://instagram.com/Smithfn1012'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>

    <a href='mailto:Smithfn1012@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>

    </div>

    <div className='footer-c'>
      <p>© 2020 Flatiron Final Project by Felicia Smith</p>
    </div>
    </footer>
  )
}
export default Footer