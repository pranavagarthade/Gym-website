import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image11.png"
import image2 from "../../assets/image22.png"
import image3 from "../../assets/image33.jpg";
import image4 from "../../assets/image44.png";
// import nb from '../../assets/nb.png';
// import adidas from '../../assets/adidas.png'
// import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png";

export const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
            <img src={image4} alt='' />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choos us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>100+ TOTAL MEMBERS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>5+ AWARDS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>25+ PROGRAM </span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>12+ YEARS WORK EXPERIENCE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>12+ YEARS WORK EXPERIENCE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>12+ YEARS WORK EXPERIENCE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>12+ YEARS WORK EXPERIENCE</span>
                </div>
            </div>
            {/* <span
                style={{
                    color: "var(--gray)",
                    fontWeight: "normal"
                }}
            >
                OUR PARTNERS
            </span>
            <div className='partners'>
                <img src={nb} alt=''/>
                <img src={adidas} alt=''/>
                <img src={nike} alt=''/>
            </div> */}
        </div>
    </div>
  )
}
