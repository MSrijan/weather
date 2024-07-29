import React from 'react';

const WeeklyWeather = ({ forecast }) => {
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className="col">
      <h2 className="text-center my-4">7-Day Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index} className="mb-2 mw-100">
          <div className="border bg-white rounded p-3">
            <div className="d-flex text-center align-items-center justify-content-between flex-wrap rounded-sm">
              <p className="fs-4">{getDayName(day.date)}</p>
              <img src={day.day.condition.icon} alt="" />
              <p className="fs-5">
                {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyWeather;
