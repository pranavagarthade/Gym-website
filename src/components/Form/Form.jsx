import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'
import fit_logo from '../../assets/fit_logo.png';


function App() {
  const form = useRef();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [classType, setClassType] = useState('');
  const [batch, setBatch] = useState('');
  const [comment, setComment] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      classType,
      batch,
      comment,
    };

    emailjs
      .sendForm(
        'service_b4cejkr',
        'template_bysz2ga',
        form.current,
        '0vG8QSdt1ZGMyG2RC',
        formData,
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email successfully sent! Check your inbox.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="container">
      <div className="image-container">
        <img src={fit_logo} alt="Health and Fitness" />
      </div>
      <div className="form-header">
        <h1>Registration Form</h1>
        <hr />
      </div>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="form-group-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone No *</label>
            <input
              name="recipient"
              type="tel"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label>Choose your class </label>
            <select
              name="class"
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
            >
              <option value="">Select a class</option>
              <option value="Yoga">Yoga</option>
              <option value="Pilates">Fat Loss</option>
              <option value="Zumba">Weight Gain</option>
            </select>
          </div>
          <div className="form-group">
            <label>Choose your batch </label>
            <select
              name="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            >
              <option value="">Select a batch</option>
              <option value="Morning">Morning (6:00 am to 7:00 am)</option>
              <option value="Morning">Morning (8:00 am to 9:00 am)</option>
              <option value="Morning">Morning (10:30 am to 11:30 am)</option>
              <option value="Evening">Evening (5:00 pm to 6:00 pm)</option>
            </select>
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group comment-group">
            <label>Your Thoughts/Problem: </label>
            <textarea
              name="comment"
              placeholder="Enter your Thoughts/Problem"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default App;