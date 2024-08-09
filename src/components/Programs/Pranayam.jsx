import React from 'react';
import '../Programs/WeightLifting.css';
import pra from '../../assets/pra.jpg';

const Pranayam = () => {
  return (
    <div>
      <section className="services-banner">
        <h2>Our Pranayama Programs</h2>
        <p>"Control breath, balance mind and body"</p>
      </section>

      <section className="benefits">
        <h2>What You Achieve</h2>
        <div className="benefits-content">
          <div className="benefits-text">
            <p>
              At Geetanjali Pranayama Sanctuary, we offer online programs to enhance breath control, reduce stress, and promote inner serenity. Our commitment to providing online pranayama solutions has garnered a positive response. This approach makes pranayama practice accessible and delivers results efficiently.</p>
            <div className="exercise-types">
              <ul>
                <li>Reduces high blood pressure</li>
                <li>Enhances cognitive performance</li>
                <li>Increases mindfulness</li>
                <li>Strengthens eye muscles</li>
                <li>Strengthens the parasympathetic nervous system</li>
              </ul>
            </div>
          </div>
          <div className="benefits-img">
            <img src={pra} alt="Benefits" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pranayam;