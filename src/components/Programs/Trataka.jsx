import React from 'react';
import '../Programs/WeightLifting.css';
import trat from '../../assets/trat.jpg';

const Trataka = () => {
  return (
    <div>
      <section className="services-banner">
        <h2>Discover Our Services</h2>
        <p>"Focus the gaze, deepen concentration"</p>
      </section>

      <section className="benefits">
        <h2>What You Achieve</h2>
        <div className="benefits-content">
          <div className="benefits-text">
            <p>
              At Geetanjali Yoga and Wellness Center, we offer a diverse range of meditation programs, all of which can be conveniently accessed online. Whether you're looking for practices to improve your focus, reduce stress, enhance mindfulness, or promote inner peace, our comprehensive meditation routines are accessible from the comfort of your own home. Our dedication to providing online meditation solutions has received an overwhelmingly positive response from our clients. This approach not only makes meditation more accessible but also enables us to deliver results more efficiently, ensuring that your meditation journey is not only effective but also time-efficient.</p>
            <div className="exercise-types">
              <ul>
                <li>Makes the eyes clear and bright</li>
                <li>Balances the nervous system, relieving nervous tension, anxiety, depression and insomnia</li>
                <li>Activates ajna chakra and is an excellent preparation for meditation</li>
                <li>Strengthens eye muscles</li>
                <li>Relieves insomnia</li>
                <li>Treats eye disorders</li>
              </ul>
            </div>
          </div>
          <div className="benefits-img">
            <img src={trat} alt="Benefits" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trataka;