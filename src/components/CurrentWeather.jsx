import React from 'react';

const CurrentWeather = ({ currentWeather, todayForecast }) => (
  currentWeather ? (
    <div className='d-flex justify-content-between'>
      <div>
        <p className="fs-2">{currentWeather.temp_c}°C</p>
        <p className="fs-4 m-0">{currentWeather.condition.text}</p>
        <p className="fs-4">Humidity: {currentWeather.humidity}%</p>
        <p className="fs-4">Chance of Rain: {todayForecast.daily_chance_of_rain}%</p>
      </div>
      <img src={currentWeather.condition.icon} alt="Weather Icon" className='mw-100'/>
    </div>
  ) : null
);

export default CurrentWeather;
