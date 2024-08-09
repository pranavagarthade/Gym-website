import React, { useState, useEffect } from 'react';
import './Header.css';
// import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import fit_logo from '../../assets/flogo.png';

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <img src={fit_logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px"
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt='' style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className='header-menu'>
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
            >
              Programs
            </ScrollLink>
          </li>
          <li>
            <RouterLink 
            className='aboutus'
              onClick={() => setMenuOpened(false)}
              to='/Aboutus'
            >
              About us
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setMenuOpened(false)}
              to='reasons'
              spy={true}
              smooth={true}
            >
              Why us
            </ScrollLink>
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
      )}
    </div>
  );
}

export default Header;
