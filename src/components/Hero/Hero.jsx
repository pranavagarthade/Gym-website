import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
// import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/chakra.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
import hero_image from "../../assets/shiva-removebg.png";
import { Link } from 'react-router-dom';
const Hero = () => {
  const transition = {type: 'string', duration:3};
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id='home'>
        <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>
            {/* the best ad */}
            <div className='the-best-ad'>
              <motion.div
              initial={{left: mobile ? '165px' : '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type: 'tween'}}
              ></motion.div>
              <span>G Fit Makes you the Best version of yourself</span> 
            </div>
            {/* Hero Heading */}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape</span>
                <span> Your mind</span>
              </div>
              <div>
                <span>And Body</span>
              </div>
              <div>
                <span>In Here We Will Help You to change you Entire Lifestyle.Shape and Build Your Ideal Body and Live Up Your Life to Fullest</span>
              </div>
            </div>
            {/* Figure */}
            <div className='figures'>
              <div>
                <span>
                  <NumberCounter end={100} start={10} delay='4' preFix="+"/>
                </span>
                <span>Happy Members</span>
              </div>
              <div>
                <span>
                <NumberCounter end={120} start={50} delay='4' preFix="+"/>
                </span>
                <span>members joined</span>
              </div>
              <div>
                <span>
                <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                </span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* Hero Button */}
            <div className="hero-buttons">
              <button className="btn"><Link className='join-now' to='/Form'>Get Started</Link></button>
              <button className="btn"><Link className='join-now' to="/Aboutus">Learn More</Link></button>
            </div>
        </div>

      
        <div className=" right-h">
        <div className='blur hero-blur'></div>
          <button className='btn'><Link className='join-now' to='/Form'>Join Now</Link></button>
          <motion.div 
          initial={{right:"-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
          className='heart-rate'>
            <img src={Heart} alt=''/>
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
          {/* Hero Image */}
          <img src={hero_image} alt='' className='hero-image' />
          <motion.img
          initial={{right:"-2rem"}}
          whileInView={{right: "4.9rem"}}
          transition={transition}
           src={hero_image_back} alt='' className='hero-image-back' />
          {/* Calories */}
          <motion.div 
          initial={{right:"37rem"}}
          whileInView={{right: "28rem"}}
          transition={transition}
          className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero