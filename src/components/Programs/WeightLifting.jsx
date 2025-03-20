import React from 'react';
import '../Programs/WeightLifting.css';  
// import wei1 from '../../assets/wei1.jpg';
// import squatimg from '../../assets/squatimg.JPG';
import rowing from '../../assets/rowing.JPG';
import curl from '../../assets/curl.JPG';
import decline from '../../assets/decline.JPG';
// import wei2 from '../../assets/wei2.jpg';
// import wei3 from '../../assets/wei3.jpg';
// import wei from '../../assets/wei.jpg';
import morning from '../../assets/morning.JPG';

const WeightLifting = () => {
    return (
        <div>
            <section className="services-banner">
                <h2>Discover Our Programs</h2>
                <p>"Lift heavy, grow stronger."</p>
            </section>

            <div className="services-container">
                <div className="service-item">
                    <img src={rowing} alt="rowing" />
                    <h3>Dumble Rowing</h3>
                    <p>Dumble Rowing for Back, strengthen core, enhance overall fitness.</p>
                </div>
                <div className="service-item">
                    <img src={curl} alt="Biceps curls" />
                    <h3>Biceps curls</h3>
                    <p>Bicep curls enhance arm strength and improve muscle tone effectively.</p>
                </div>
                <div className="service-item">
                    <img src={decline} alt="Decline chest press" />
                    <h3>Decline chest press</h3>
                    <p>Decline chest press targets lower chest, improving strength and definition.</p>
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
                                <li>Dumble Rowing</li>
                                <li>Biceps curls</li>
                                <li>Decline chest press</li>
                                <li>Leg Press</li>
                            </ul>
                        </div>
                    </div>
                    <div className="benefits-img">
                        <img src={morning} alt="Benefits" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WeightLifting;