import React from 'react';
import './about.css';
import image3 from "../../assets/image33.jpg";

function AboutUs() {
  return (
    <div className="about-us-container" id='aboutus'>
      <div
        className="about-us-banner"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <h1>About Us</h1>
        <p className="coach-info">Know more about your coach</p>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to Geetanjali's Yoga and Fitness Zone, where we have been dedicated to promoting health and well-being for over a decade. Our classes are conducted online, making it convenient for you to join from the comfort of your home. We offer a comprehensive range of services, including free diet plans, meditation sessions, and much more. Join us to embark on a journey towards a healthier and more balanced life.
        </p>
        <div className="about-us-images">
          <img src="image1.jpg" alt="K11 certificate" />
          <img src="image2.jpg" alt="Nutrients" />
        </div>
        <p>
          At Geetanjali's Yoga and Fitness Zone, we believe in a holistic approach to fitness. Our experienced instructors guide you through each session with personalized attention, ensuring that you achieve your health goals effectively. Join our community today and experience the transformation.
        </p>
      </div>

      <div className="yoga-enhance-section">
        <div className="yoga-enhance-info">
          <h2>YOGA ENHANCES YOUR LIFE.</h2>
          <div className="line"></div>
          <p>
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venen faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed donec consequat, leo eget bibendum soda, augue velit cursus nunc donec qum felis ultricies nec, pellente
          </p>
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