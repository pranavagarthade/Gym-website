import React from 'react';
import '../Programs/WeightLifting.css';  
import medi1 from '../../assets/medi1.jpg';
import med2 from '../../assets/med2.jpg';
import med3 from '../../assets/med3.jpg';
import mde from '../../assets/mde.jpg';

const Meditation = () => {
    return (
        <div>
            <section className="services-banner">
                <h2>Discover Our Programs</h2>
                <p>"Calm the mind, find peace"</p>
            </section>

            <div className="services-container">
                <div className="service-item">
                    <img src={medi1} alt="Relaxation" />
                    <h3>Relaxation</h3>
                    <p>"Meditation: Quiet mind, tranquil heart, inner peace discovered."</p>
                </div>
                <div className="service-item">
                    <img src={med2} alt="Loving-Kindness Meditation" />
                    <h3>Loving-Kindness Meditation</h3>
                    <p>"Loving-kindness meditation: Radiate love, compassion, fostering inner well-being."</p>
                </div>
                <div className="service-item">
                    <img src={med3} alt="Vipassana Meditation" />
                    <h3>Vipassana Meditation</h3>
                    <p>"Vipassana Meditation: Insight unfolds, clarity arises, mindfulness deepens."</p>
                </div>
            </div>

            <section className="benefits">
                <h2>What You Achieve</h2>
                <div className="benefits-content">
                    <div className="benefits-text">
                        <p>
                        At TranquilMinds Meditation Center, we provide a wide array of meditation programs, 
                            all accessible through online platforms. Whether you're seeking practices to enhance your focus
                            , reduce stress, or foster inner serenity, our comprehensive meditation sessions can be enjoyed in the comfort of your own space. The enthusiastic feedback from our clients underscores our dedication to offering convenient online meditation solutions. This approach not only increases accessibility 
                            to meditation but also ensures that our programs yield efficient results, making your meditation journey effective and time-friendly.</p>
                        <div className="exercise-types">
                            <ul>
                                <li>Transcendental Meditation</li>
                                <li>Loving-Kindness Meditation</li>
                                <li>Relaxation</li>
                                <li>Vipassana Meditation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="benefits-img">
                        <img src={mde} alt="Benefits" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Meditation;