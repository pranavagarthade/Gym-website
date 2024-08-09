

import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import Logo from "../../assets/flogo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="GIMOX" />
          <p>
          "Yoga is the practice of tolerating the consequences of being yourself." – The Bhagavad Gita
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>INFORMATION</h3>
            <ul>
              <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                  HOME
                </ScrollLink>
              </li>
              <li>
                {" "}
                <RouterLink to="/Aboutus">ABOUT US</RouterLink>
              </li>
              <li>
                <ScrollLink to="programs" smooth={true} duration={500}>
                  PROGRAMS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="reasons" smooth={true} duration={500}>
                  REASONS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="testimonials" smooth={true} duration={500}>
                  TESTIMONIALS
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>
                <RouterLink to="/WeightLifting">WEIGHT LIEFTING</RouterLink>
              </li>
              <li>
                <RouterLink to="/Cardio">CARDIO TRAINING</RouterLink>
              </li>
              <li>
                <RouterLink to="/FatBurning">FAT BURNING</RouterLink>
              </li>
              <li>
                <RouterLink to="/Meditation">MEDITATION</RouterLink>
              </li>
              <li>
                <RouterLink to="/Yoga">YOGA</RouterLink>
              </li>
              <li>
                <RouterLink to="/Trataka">TRATAKA</RouterLink>
              </li>
              <li>
                <RouterLink to="/Pranayam">PRANAYAM</RouterLink>
              </li>
              <li>
                <RouterLink to="/Laghu">LAGHU SHANKHA PRAKSHALANA </RouterLink>
              </li>
              <li>
                <RouterLink to="/HealthFitnes">HEALTH FITNESS</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </div>
        <div className="contact-info">
          <span>
            <FaPhone /> (+91) 889476506
          </span>
          <span>
            <FaEnvelope /> geetanjalifitness9@gmail.com
          </span>
          <span>Mumbai, Maharashtra</span>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/geeta.agarthade.92"  target="blank" aria-label="Facebook">
            <FaFacebookF />
          </a>{" "}
          <a href="https://www.instagram.com/geetanjali_yoga__fitness_zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="blank" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@geetasyogaandfitnesszone5857"  target="blank" aria-label="Youtube">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/in/geetanjali-agarthade-1b3a40231" target="blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
