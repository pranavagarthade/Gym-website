import './Join.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const emailInput = form.current.querySelector('input[name="user_email"]').value;
    
    if (!emailInput) {
      alert('Please enter your email');
      return;
    }

    emailjs
      .sendForm('service_pgzr5dp', 'template_1nco0d5', form.current, '0vG8QSdt1ZGMyG2RC')
      .then(
        () => {
          alert("Email sent successfully");
        },
        (error) => {
          alert("Failed to send email");
        }
      );
  };

  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} onSubmit={sendEmail} className='email-container'>
          <input className='p' type='email' name='user_email' placeholder='Enter your email address' />
          <button className='btn btn-j' type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
