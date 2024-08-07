import React, { useState } from 'react';
import './Timetable.css';

const Timetable = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [isAnimating, setIsAnimating] = useState(false);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedules = {
    Monday: [
      { time: '9:00 AM - 10:00 AM', activity: 'Cycling', instructor: 'Karolina' },
      { time: '9:00 AM - 10:00 AM', activity: 'Running', instructor: 'Karolina' },
      { time: '9:00 AM - 10:00 AM', activity: 'Body Building', instructor: 'Josh Jameson' },
      { time: '9:00 AM - 10:00 AM', activity: 'Cardio', instructor: 'Karolina' },
    ],
    Tuesday: [
        { time: '9:00 AM - 10:00 AM', activity: 'Cycling', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Running', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Body Building', instructor: 'Josh Jameson' },
        { time: '9:00 AM - 10:00 AM', activity: 'Cardio', instructor: 'Karolina' },
      ],
      Wednesday: [
        { time: '9:00 AM - 10:00 AM', activity: 'Cycling', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Running', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Body Building', instructor: 'Josh Jameson' },
        { time: '9:00 AM - 10:00 AM', activity: 'Cardio', instructor: 'Karolina' },
      ],
      Thursday: [
        { time: '9:00 AM - 10:00 AM', activity: 'Cycling', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Running', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Body Building', instructor: 'Josh Jameson' },
        { time: '9:00 AM - 10:00 AM', activity: 'Cardio', instructor: 'Karolina' },
      ],
      Friday: [
        { time: '9:00 AM - 10:00 AM', activity: 'Cycling', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Running', instructor: 'Karolina' },
        { time: '9:00 AM - 10:00 AM', activity: 'Body Building', instructor: 'Josh Jameson' },
        { time: '9:00 AM - 10:00 AM', activity: 'Cardio', instructor: 'Karolina' },
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
      <h1 className="title">OUR <span>TIMETABLE</span></h1>
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