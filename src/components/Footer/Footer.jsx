import React from 'react'
import './Footer.css';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
// import Logo from '../../assets/logo.png';
import fit_logo from '../../assets/fit_logo.png';


const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={Youtube} alt='YouTube'/>
          <img src={Instagram} alt='Instagram'/>
          <img src={LinkedIn} alt='LinkedIn'/>
        </div>
        <div className='logo-f'>
          <img src={fit_logo} alt='Logo' />
        </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer
