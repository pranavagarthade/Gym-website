import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cardio from './components/Programs/Cardio';
import WeightLifting from './components/Programs/WeightLifting';
import FatBurning from './components/Programs/FatBurning';
import Meditation from './components/Programs/Meditation';
import Yoga from './components/Programs/Yoga';
import Trataka from './components/Programs/Trataka';
import Pranayam from './components/Programs/Pranayam';
import Laghu from './components/Programs/Laghu';
import HealthFitnes from './components/Programs/HealthFitnes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
<Router>
    <Routes>

      <Route path="/" element={ <App />} />
      <Route path="/WeightLifting" element={<WeightLifting/>} />
      <Route path="/cardio" element={<Cardio/>} />
      <Route path="/FatBurning" element={<FatBurning/>} />
      <Route path="/Meditation" element={<Meditation/>} />
      <Route path="/Yoga" element={<Yoga/>} />
      <Route path="/Trataka" element={<Trataka/>} />
      <Route path="/Pranayam" element={<Pranayam/>} />
      <Route path="/Laghu" element={<Laghu/>} />
      <Route path="/HealthFitnes" element={<HealthFitnes/>} />

      
      {/* Add routes for all existing pages */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals