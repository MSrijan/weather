import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDay = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div>
        <p className="fs-2">{currentWeather.temp_c}°C</p>
        <p>
          <span className='fw-bold fs-5'>{getDay(currentWeather.last_updated)} </span>
          {formatTime(currentWeather.last_updated)}
        </p>
      </div>
      <img src={currentWeather.condition.icon} alt="Weather Icon" />
    </div>
  );
};

export default CurrentWeather;
