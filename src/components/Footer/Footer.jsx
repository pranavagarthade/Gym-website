import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaFlickr, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="GIMOX" />
          <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected.</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/clients">CLIENTS</a></li>
              <li><a href="/privacy">PRIVACY POLICY</a></li>
              <li><a href="/customer">CUSTOMER</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><a href="/services/psycho-training">PSYCHO TRAINING</a></li>
              <li><a href="/services/self-defense">SELF DEFENSE</a></li>
              <li><a href="/services/fitness-for-man">FITNESS FOR MAN</a></li>
              <li><a href="/services/strength-training">STRENGTH TRAINING</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </div>
        <div className="contact-info">
          <span>(+01) 123 456 7890</span>
          <span>info@example.com</span>
          <span>51 Somestreet Cambridge, CB4 3AA, United Kingdom</span>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://flickr.com" aria-label="Flickr"><FaFlickr /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;