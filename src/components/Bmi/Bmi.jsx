import React, { useState } from 'react';
import './Bmi.css'; // Import the CSS file
import bmi1 from "../../assets/bmi1.jpg"
import bmi2 from "../../assets/bmi2.jpg"
import bmi3 from "../../assets/bmi3.jpg"
import bmi4 from "../../assets/bmi4.jpg"

function Bmi() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    if (!height || !weight) {
      setMessage('Please enter values');
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage('Your weight is perfect');
    } else {
      setMessage('You are overweight');
    }
  };

  return (
    <div className="Reasons">
      <div className="left-r">
        <img src={bmi2} alt='' className='img1'/>
        <img src={bmi1} alt='' className='img2'/>
        <img src={bmi3} alt='' className='img3'/>
        <img src={bmi4} alt='' className='img4'/>
      </div>
      <div className="right-r">
        <h1><span className='span1'>BMI Calculator</span></h1>
        <div className='purna'>
          <label className='label-text'>
            Height (cm):
            <input
              className='inputs'
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div className='purna'>
          <label  className='label-text'>
            Weight (kg):
            <input
              className='inputs'
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <button className="button-28" role="button" onClick={calculateBmi}>Calculate BMI</button>
        {message && (
          <div className='out'>
            {bmi && <h5 className='bmi-text'>BMI: {bmi}</h5>}
            <p className='message-text' style={{ color: bmi < 18.5 || bmi > 24.9 ? '#FF0000' : '#00ff00' }}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bmi;
