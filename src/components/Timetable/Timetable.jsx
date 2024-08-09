import React, { useState } from 'react';
import './Timetable.css';

const Timetable = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [isAnimating, setIsAnimating] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedules = {
    Monday: [
      { time: '6:00 AM - 7:00 AM  - Morning' , activity: 'Chest Workout and Face Yoga', instructor: 'Geetanjali' },
      { time: '8:00 AM - 9:00 AM  - Morning', activity: 'Chest Workout and Face Yoga', instructor: 'Geetanjali' },
      { time: '10:30 AM - 11:30 AM - Morning', activity: 'Chest Workout and Face Yoga ', instructor: 'Geetanjali' },
      { time: '5:00 PM - 6:00 PM  - Morning', activity: 'Chest Workout and Face Yoga', instructor: 'Geetanjali' },
    ],
    Tuesday: [
        { time: '6:00 AM - 7:00 AM  - Morning', activity: 'Core Workout and Face yoga', instructor: 'Geetanjali' },
        { time: '8:00 AM - 9:00 AM  - Morning', activity: 'Core Workout and Face yoga', instructor: 'Geetanjali' },
        { time: '10:30 AM - 11:30 AM - Morning', activity: 'Core Workout and Face yoga', instructor: ' Geetanjali' },
        { time: '5:00 PM - 6:00 PM  - Evening', activity: 'Core Workout and Face yoga', instructor: 'Geetanjali' },
      ],
      Wednesday: [
        { time: '6:00 AM - 7:00 AM  - Morning', activity: 'Back Workout and Face Yoga', instructor: 'Geetanjali' },
        { time: '8:00 AM - 9:00 AM  - Morning', activity: 'Back Workout and Face Yoga', instructor: 'Geetanjali' },
        { time: '10:30 AM - 11:30 AM - Morning', activity: 'Back Workout and Face Yoga', instructor: ' Geetanjali' },
        { time: '5:00 PM - 6:00 PM  - Evening', activity: 'Back Workout and Face Yoga', instructor: 'Geetanjali' },
      ],
      Thursday: [
        { time: '6:00 AM - 7:00 AM  - Morning', activity: 'Yogasana and Pranayam', instructor: 'Geetanjali' },
        { time: '8:00 AM - 9:00 AM  - Morning', activity: 'Yogasana and Pranayam', instructor: 'Geetanjali' },
        { time: '10:30 AM - 11:30 AM - Morning', activity: ' Yogasana and Pranayam', instructor: ' Geetanjali' },
        { time: '5:00 PM - 6:00 PM  - Evening', activity: 'Yogasana and Pranayam', instructor: 'Geetanjali' },
      ],
      Friday: [
        { time: '6:00 AM - 7:00 AM  - Morning', activity: 'Legs Workout and Cyclic Meditaion', instructor: 'Geetanjali' },
        { time: '8:00 AM - 9:00 AM  - Morning', activity: 'Legs Workout and Cyclic Meditaion', instructor: 'Geetanjali' },
        { time: '10:30 AM - 11:30 AM - Morning', activity: 'Legs Workout and Cyclic Meditaion', instructor: ' Geetanjali' },
        { time: ':00 PM - 6:00 PM  - Evening', activity: 'Legs Workout and Cyclic Meditaion', instructor: 'Geetanjali' },
      ],
    
  };

  const handleDayChange = (day) => {
    if (day !== activeDay) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDay(day);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="timetable">
      <h1 className='titlee'><span className='stroke-text'>ONLINE</span></h1><h1 className='title'> <span> CLASSES TIMETABLE</span></h1>
      <nav className="day-nav">
        {days.map(day => (
          <button
            key={day}
            className={activeDay === day ? 'active' : ''}
            onClick={() => handleDayChange(day)}
          >
            {day}
          </button>
        ))}
      </nav>
      <div className={`schedule-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {schedules[activeDay].map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="time">{item.time}</div>
            <div className="activity">{item.activity}</div>
            <div className="instructor">{item.instructor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;