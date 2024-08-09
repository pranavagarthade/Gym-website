import React from 'react';
import '../Programs/WeightLifting.css';
import yog1 from '../../assets/yog1.webp';
import yog2 from '../../assets/yog2.jpg';
import yog3 from '../../assets/yog3.webp';
import yogaimg from '../../assets/yogaimg.jpg';

const HealthFitnes = () => {
  return (
    <div>
      <section className="services-banner">
        <h2>Discover Our Programs</h2>
        <p>"Unite body, mind, and spirit"</p>
      </section>

      <div className="services-container">
        <div className="service-item">
          <img src={yog1} alt="Mindfulness Yoga" />
          <h3>Mindfulness Yoga</h3>
          <p>"Mindfulness yoga: cultivates awareness, reduces stress, enhances well-being."</p>
        </div>
        <div className="service-item">
          <img src={yog2} alt="Meditation" />
          <h3>Meditation</h3>
          <p>"Meditation: Calms mind, fosters clarity, promotes inner peace."</p>
        </div>
        <div className="service-item">
          <img src={yog3} alt="Vinyasa Flow" />
          <h3>Vinyasa Flow</h3>
          <p>"Vinyasa Flow: Dynamic yoga, synchronized breath, fluid movements."</p>
        </div>
      </div>

      <section className="benefits">
        <h2>What You Achieve</h2>
        <div className="benefits-content">
          <div className="benefits-text">
            <p>
              At Geetanjali Weightlifting Academy, we offer a diverse range of weightlifting programs, all of which can be conveniently accessed online. Whether you're looking to build strength in your upper body, tone your lower body, focus on cardiovascular fitness, enhance your flexibility, or strengthen your core, our comprehensive weightlifting routines are accessible from the comfort of your own home. Our commitment to providing online weightlifting solutions has received overwhelmingly positive feedback from our clients. This approach not only makes weightlifting more accessible but also allows us to efficiently deliver results, ensuring that your weightlifting journey is not only effective but also time-efficient.</p>
            <div className="exercise-types">
              <ul>
                <li>Hatha Yoga</li>
                <li>Vinyasa Flow</li>
                <li>Yin Yoga</li>
                <li>Meditation</li>
              </ul>
            </div>
          </div>
          <div className="benefits-img">
            <img src={yogaimg} alt="Benefits" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthFitnes;