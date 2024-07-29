import React from 'react';

const HourlyWeather = ({ hourlyForecast }) => (
  <>
    <div className="row border rounded">
      {hourlyForecast.map((hour, index) => (
        <div key={index} className="col my-3">
          <div className="text-center">
            <h3>{hour.time.split(' ')[1]}</h3>
            <p>{hour.temp_c}°C</p>
            <img src={hour.condition.icon} alt="Weather Icon" />
          </div>
        </div>
      ))}
    </div>
  </>
);

export default HourlyWeather;
