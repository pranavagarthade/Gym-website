import React from 'react';
import './about.css';
import cerificate1 from "../../assets/cerificate1.png"
import cer2 from "../../assets/cer2.png";
import abt11 from "../../assets/abt11.png";
import log from "../../assets/aimgg.png"


function AboutUs() {
  return (
    <div className="about-us-container" id='aboutus'>
      <div
        className="about-us-banner"
        style={{ backgroundImage: `url(${abt11})` }}
      >
        <h1>About Us</h1>
        <p className="coach-info">Know more about your coach</p>
      </div>
      <div className="about-us-content">
        <p>
        At G Fit, I, Geetanjali, am dedicated to guiding you on your fitness journey. 
        As a certified K11 Trainer and a specialist in nutrition with over 12 years of experience in the industry,
         I bring a wealth of knowledge to help you achieve your fitness goals. 
         My mission is to enhance your lifestyle by offering personalized training programs and expert nutritional advice.
          Whether you aim to improve your overall health, increase your strength, or reach specific fitness milestones,
           I am here to support and motivate you every step of the way. Together, we’ll work towards a healthier, 
           more balanced, and fulfilling life.        </p>
        <div className="about-us-images">
          <img src={cerificate1} alt="Vyas certificate" />
          <img src={cer2} alt="Nutrients" />
        </div>
        <p>
        At Geetanjali Yoga and Fitness Club, we offer a range of online classes to fit your schedule and fitness needs. 
        Our daily batches include a variety of workouts targeting different muscle groups, ensuring a comprehensive approach to your fitness.
         In addition to our dynamic workout sessions, we provide enriching yoga and meditation classes to foster mental clarity and physical well-being.
          On Saturdays,
          we hold personal counseling sessions where you can delve into your goals and reshape your mindset for a more focused and positive approach to your fitness journey. 
        Join us online and experience a holistic approach to health and wellness from the comfort of your home.        </p>
      </div>

      <div className="card-container">
    <div className="card-left">
      <img src={log} alt="banner" className="card-image" />
    </div>
    <div className="card-right">
      <p className="card-info">
      At Geetanjali Yoga and Fitness Zone, we offer a comprehensive fitness program that includes yoga, muscle building, and muscle toning exercises on a daily basis. Our muscle building program focuses on compound movements and progressive overload to help you build strength and muscle mass, utilizing a variety of equipment such as free weights, resistance bands, and machines to target all major muscle groups. Meanwhile, our muscle toning program incorporates high-repetition exercises and bodyweight movements to help you burn fat and create long, lean muscles. Whether you're looking to build strength, increase flexibility, or simply feel more energized and focused, our expert trainers will guide you through a workout that's tailored to your specific needs and goals, helping you achieve a stronger, healthier you.      </p>
    </div>
</div>

      <div className="yoga-enhance-section">
        <div className="yoga-enhance-info">
          <h2>DAILY WORKOUT & YOGA ENHANCES YOUR LIFE.</h2>
          <div className="line"></div>
          <p>
          Boost your physical health with daily workouts at Geetanjali Yoga and Fitness Zone. Improve your mental well-being through regular yoga practice. Reduce stress and anxiety with a daily yoga routine. Increase strength, flexibility, and balance with expert instruction.
           Experience a greater sense of well-being and happiness through regular exercise and yoga at Geetanjali Yoga and Fitness Club.          </p>
        </div>



        <div className="yoga-enhance-bars">
          <div className="bar">
            <div className="bar-label">Breathing</div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '87%' }}></div>
            </div>
            <div className="bar-percentage">87%</div>
          </div>
          <div className="bar">
            <div className="bar-label">Metabolism</div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '95%' }}></div>
            </div>
            <div className="bar-percentage">95%</div>
          </div>
          <div className="bar">
            <div className="bar-label">Flexibility</div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '80%' }}></div>
            </div>
            <div className="bar-percentage">80%</div>
          </div>
          <div className="bar">
            <div className="bar-label">Toned Muscles</div>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '62%' }}></div>
            </div>
            <div className="bar-percentage">62%</div>
          </div>
        </div>
      </div>


      <div className="video-section">
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/gqoa2qWs5AE" 
            title="Yoga Tutorial"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="video-info">
          <h3>Discover the Power of Yoga</h3>
          <p>
            This introductory video guides you through the fundamental principles of yoga and its transformative effects on body and mind. Learn about:
          </p>
          <ul>
            <li>Basic yoga poses for beginners</li>
            <li>Proper breathing techniques</li>
            <li>The mind-body connection in yoga practice</li>
            <li>Benefits of regular yoga practice</li>
          </ul>
          <p>
            Join us on this journey to enhance your physical strength, flexibility, and mental well-being. Start your yoga practice today and experience the difference it can make in your life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


