import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import Bars from '../../assets/bars.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import fit_logo from '../../assets/flogo.png';

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setMenuOpened(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpened(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={fit_logo} alt="" className='logo' />

      {mobile ? (
        <div className="mobile-menu-wrapper" ref={menuRef}>
          {/* Hamburger / X toggle */}
          <div
            className={`hamburger-btn ${menuOpened ? 'open' : ''}`}
            onClick={() => setMenuOpened(prev => !prev)}
          >
            {menuOpened ? (
              // X icon
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <line x1="3" y1="3" x2="17" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="17" y1="3" x2="3" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <img src={Bars} alt='menu' style={{ width: '1.5rem', height: '1.5rem' }} />
            )}
          </div>

          {/* Compact dropdown */}
          <ul className={`mobile-dropdown ${menuOpened ? 'is-open' : ''}`}>
            <li>
              <ScrollLink
                onClick={() => setMenuOpened(false)}
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
              >Home</ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setMenuOpened(false)}
                to='programs'
                spy={true}
                smooth={true}
              >Programs</ScrollLink>
            </li>
            <li>
              <RouterLink
                className='aboutus'
                onClick={() => setMenuOpened(false)}
                to='/Aboutus'
              >About us</RouterLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setMenuOpened(false)}
                to='reasons'
                spy={true}
                smooth={true}
              >Why us</ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setMenuOpened(false)}
                to='testimonials'
                spy={true}
                smooth={true}
              >Testimonials</ScrollLink>
            </li>
          </ul>
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <ScrollLink activeClass='active' to='home' spy={true} smooth={true}>Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to='programs' spy={true} smooth={true}>Programs</ScrollLink>
          </li>
          <li>
            <RouterLink className='aboutus' to='/Aboutus'>About us</RouterLink>
          </li>
          <li>
            <ScrollLink to='reasons' spy={true} smooth={true}>Why us</ScrollLink>
          </li>
          <li>
            <ScrollLink to='testimonials' spy={true} smooth={true}>Testimonials</ScrollLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;