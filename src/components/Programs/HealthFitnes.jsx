import React from 'react';
import '../Programs/WeightLifting.css';  
import wei from '../../assets//niti.png';

const HealthFitnes = () => {
    return (
        <div>
        <section className="services-banner">
          <h2>Discover Our Programs</h2>
          <p>"Explore the transformative power of Jala Niti (Nasal cleasing)."</p>
        </section>
  
        <section className="benefits">
          <h2>What You Achieve</h2>
          <div className="benefits-content">
            <div className="benefits-text">
              <p>
              At Geetanjali Yoga and Fitness Zone, we also offer Jala Neti, a traditional yogic practice that involves rinsing the nasal passages with a saline solution to promote respiratory health and overall well-being. This ancient technique is designed to cleanse the nasal cavity, sinuses, and eyes, removing impurities and excess mucus that can lead to congestion, allergies, and other respiratory issues. By incorporating Jala Neti into your daily routine, you can experience a range of benefits, including improved breathing, reduced sinus pressure, and enhanced mental clarity. Our expert instructors will guide you through the proper technique, ensuring a safe and effective practice that leaves you feeling refreshed, renewed, and ready to take on the day.</p>
              <div className="exercise-types">
                <ul>
                  <li>Improved Breathing: Clears nasal passages, allowing for easier breathing</li>
                  <li>Reduced Sinus Pressure: Relieves congestion and sinusitis</li>
                  <li>Enhanced Mental Clarity: Promotes relaxation and reduces stress</li>
                  <li>Reduces Allergies: Flushes out allergens and excess mucus</li>
                  <li>Improves Sense of Smell: Cleanses olfactory nerves, enhancing sense of smell</li>
                </ul>
              </div>
            </div>
            <div className="benefits-img">
              <img src={wei} alt="Benefits" />
            </div>
          </div>
        </section>
      </div>
    );
};

export default HealthFitnes;