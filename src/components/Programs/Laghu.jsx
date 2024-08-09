import React from 'react';
import '../Programs/WeightLifting.css';
import laghu from '../../assets/laghu.jpg';

const Laghu = () => {
  return (
    <div>
      <section className="services-banner">
        <h2>Discover Our Programs</h2>
        <p>"Explore the transformative power of Laghushanka Prakshalana meditation."</p>
      </section>

      <section className="benefits">
        <h2>What You Achieve</h2>
        <div className="benefits-content">
          <div className="benefits-text">
            <p>
              At Geetanjali Laghushanka Prakshshan Meditation Studio, we offer online programs to enhance focus, reduce stress, improve mindfulness, and foster inner peace. Our commitment to providing online Laghushanka Prakshshan meditation solutions has garnered an overwhelmingly positive response. This approach not only makes this specialized meditation technique more accessible but also enables us to deliver results more efficiently, ensuring that your meditation journey is not only effective but also time-efficient.</p>
            <div className="exercise-types">
              <ul>
                <li>Cleanses the body</li>
                <li>Cures digestive disorders, indigestion, constipation</li>
                <li>Provides a divine or Godly body with constant practice</li>
                <li>Improves digestion and enhances metabolism</li>
                <li>Strengthens the digestive organs and improves their functions</li>
              </ul>
            </div>
          </div>
          <div className="benefits-img">
            <img src={laghu} alt="Benefits" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laghu;