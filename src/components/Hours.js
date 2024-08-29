// Placeholder to host a component
import React, { useState, useEffect } from 'react';

const Hours = () => {
  const [date, setDate] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [todayHours, setTodayHours] = useState('');

  useEffect(() => {
    const mexicoCityTimezone = 'America/Mexico_City';
    const currentDate = new Date().toLocaleString('en-US', { timeZone: mexicoCityTimezone });
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[new Date(currentDate).getDay()];
    const currentTodayHours = new Date(currentDate).getDay() >= 1 && new Date(currentDate).getDay() <= 5 ? '10:00 - 16:00 hrs' : '9:00 - 20:00 hrs';

    setDate(new Date(currentDate));
    setDayOfWeek(currentDayOfWeek);
    setTodayHours(currentTodayHours);
  }, []);

  if (!date) {
    return null; // Render nothing on the initial server-side render
  }

  return (
    <div>
      <h2>Today's Hours</h2>
      <p>{dayOfWeek} {todayHours}</p>
    </div>
  );
};

export default Hours;



