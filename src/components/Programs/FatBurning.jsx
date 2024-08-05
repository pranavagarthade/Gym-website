import React from 'react';
import '../Programs/WeightLifting.css';  
import exeimg from '../../assets/exeimg.jpg';
import lowerimg from '../../assets/lowerimg.jpg';
import upperi from '../../assets/upperi.webp';
import card from '../../assets/card.jpg';

const FatBurning = () => {
    return (
        <div>
            <section className="services-banner">
                <h2>Discover Our Programs</h2>
                <p>"Experience a Healthier You"</p>
            </section>

            <div className="services-container">
                <div className="service-item">
                    <img src={lowerimg} alt="Lower Body Toning" />
                    <h3>Lower Body Toning</h3>
                    <p>"Lower body workouts enhance strength and sculpt muscles."</p>
                </div>
                <div className="service-item">
                    <img src={upperi} alt="Upper Body Workouts" />
                    <h3>Upper Body Workouts</h3>
                    <p>"Upper body exercises build strength and define muscles."</p>
                </div>
                <div className="service-item">
                    <img src={card} alt="Cardiovascular Training" />
                    <h3>Cardiovascular Training</h3>
                    <p>"Cardio workouts improve heart health and boost stamina."</p>
                </div>
            </div>

            <section className="benefits">
                <h2>Our Benefits</h2>
                <div className="benefits-content">
                    <div className="benefits-text">
                        <p>
                        At Geetanjali Yoga and Fitness Zone, we offer a diverse range of exercise programs, all of which are available in a convenient online mode. Whether you're seeking upper body workouts, lower body toning, cardiovascular training, flexibility enhancement, or core strengthening, our comprehensive fitness routines are accessible from the comfort of your own home. Our commitment to providing online fitness solutions has garnered an overwhelmingly positive response from our clients. This approach not only makes fitness more accessible but also allows us to deliver results more efficiently, ensuring that your fitness journey is not only effective but also time-efficient.</p>
                        <div className="exercise-types">
                            <ul>
                                <li>Lower Body Toning</li>
                                <li>Upper Body Workouts</li>
                                <li>Cardiovascular Training</li>
                                <li>Flexibility Enhancement</li>
                                <li>Core Strengthening</li>
                            </ul>
                        </div>
                    </div>
                    <div className="benefits-img">
                        <img src={exeimg} alt="Benefits" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FatBurning;