import React from 'react';
import '../Programs/WeightLifting.css';  
import wei1 from '../../assets/wei1.jpg';
import wei2 from '../../assets/wei2.jpg';
import wei3 from '../../assets/wei3.jpg';
import wei from '../../assets/wei.jpg';

const WeightLifting = () => {
    return (
        <div>
            <section className="services-banner">
                <h2>Discover Our Programs</h2>
                <p>"Our Offered Programs"</p>
            </section>

            <div className="services-container">
                <div className="service-item">
                    <img src={wei1} alt="Squats" />
                    <h3>Squats</h3>
                    <p>Squats sculpt legs, strengthen core, enhance overall fitness.</p>
                </div>
                <div className="service-item">
                    <img src={wei2} alt="Overhead Press" />
                    <h3>Overhead Press</h3>
                    <p>Overhead press: Builds shoulder strength, tones arms, boosts posture.</p>
                </div>
                <div className="service-item">
                    <img src={wei3} alt="Lunges" />
                    <h3>Lunges</h3>
                    <p>Lunges shape legs, improve balance, enhance lower body strength.</p>
                </div>
            </div>

            <section className="benefits">
                <h2>Our Benefits</h2>
                <div className="benefits-content">
                    <div className="benefits-text">
                        <p>
                        At Geetanjali Weightlifting Academy, we offer a diverse range of weightlifting programs, all of which can be conveniently accessed online. Whether you're looking to build strength in your upper body, tone your lower body, focus on cardiovascular fitness, enhance your flexibility, or strengthen your core, our comprehensive weightlifting routines are accessible from the comfort of your own home. Our commitment to providing online weightlifting solutions has received overwhelmingly positive feedback from our clients. This approach not only makes weightlifting more accessible but also allows us to efficiently deliver results, ensuring that your weightlifting journey is not only effective but also time-efficient.</p>
                        <div className="exercise-types">
                            <ul>
                                <li>Squats</li>
                                <li>Overhead Press</li>
                                <li>Lunges</li>
                                <li>Leg Press</li>
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

export default WeightLifting;