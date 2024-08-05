import React from 'react';
import '../Programs/WeightLifting.css';  
import car from '../../assets/car.jpg';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';

const Cardio = () => {
    return (
        <div>
            <section className="services-banner">
                <h2>Discover Our Programs</h2>
                <p>"Experience a Healthier You"</p>
            </section>

            <div className="services-container">
                <div className="service-item">
                    <img src={car1} alt="Running" />
                    <h3>Running</h3>
                    <p>Boost cardiovascular health and endurance.</p>
                </div>
                <div className="service-item">
                    <img src={car2} alt="Cycling" />
                    <h3>Cycling</h3>
                    <p>Burn calories and improve overall fitness.</p>
                </div>
                <div className="service-item">
                    <img src={car3} alt="Jumping Rope" />
                    <h3>Jumping Rope</h3>
                    <p>Fun cardio exercise for agility and coordination.</p>
                </div>
            </div>

            <section className="benefits">
                <h2>Our Benefits</h2>
                <div className="benefits-content">
                    <div className="benefits-text">
                        <p>
                        At Geetanjali Cardio Fitness Hub, we offer a diverse range of cardio exercise programs accessible online. Whether you're aiming to boost cardiovascular health, burn calories, or improve endurance, our comprehensive routines can be done from the comfort of your home. Positive client responses affirm our dedication to delivering efficient and effective results in your fitness journey.</p>
                        <div className="exercise-types">
                            <ul>
                                <li>Running</li>
                                <li>Cyling</li>
                                <li>Jumping Rope</li>
                                <li>Sprinting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="benefits-img">
                        <img src={car} alt="Benefits" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cardio;