import React, { useState } from 'react';
import './Bmi.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setBMIStatus] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(1));

      const status = getWeightStatus(bmiValue);
      setBMIStatus(status);
    }
  };

  const getWeightStatus = (bmi) => {
    if (bmi < 18.5) return ['Underweight', '😕', 'red'];
    if (bmi >= 18.5 && bmi <= 24.9) return ['Healthy', '😊', 'green'];
    if (bmi >= 25.0 && bmi <= 29.9) return ['Overweight', '😐', 'red'];
    if (bmi >= 30.0) return ['Obese', '😟', 'red'];
    return ['', '', ''];
  };

  return (
    <div className="bmi-calculator">
      <div className="calculator-section">
        <span className="bmit">BMI Calculator</span>
        <h1><span className="bmis">CALCULATE</span> YOUR BMI</h1>
        <p>Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m<sup>2</sup> where kg is a person's weight in kilograms and m<sup>2</sup> is their height in metres squared.</p>
        
        <div className="calculator">
          <div className="input-group">
            <input className="bg"
              type="number"
              placeholder="Height / cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input className="bg"
              type="number"
              placeholder="Weight / kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          
          <button className="bmic" onClick={calculateBMI}>CALCULATE</button>
          
          {bmi && (
            <div className="results">
              BMI: <strong style={{ color: bmiStatus[2] }}>{bmi}</strong> - {bmiStatus[0]} {bmiStatus[1]}
            </div>
          )}
        </div>
      </div>
      
      <div className="bmi-table">
        <h2>BMI WEIGHT STATUS</h2>
        <table>
          <thead>
            <tr>
              <th>BMI</th>
              <th>WEIGHT STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Below 18.5</td>
              <td>Underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Healthy</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Overweight</td>
            </tr>
            <tr>
              <td>30.0 and Above</td>
              <td>Obese</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BMICalculator;
