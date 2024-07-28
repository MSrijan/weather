import React from 'react';

const getDayLabel = (index) => {
  if (index === 0) return 'Today';
  if (index === 1) return 'Tomorrow';
  return new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long' });
};

const WeeklyWeather = ({ forecast }) => (
  <>
    <div className="col">
    <h2 className="text-center my-4">7-Day Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index} className="mb-2 w-100">
          <div className="border">
            <div className="d-flex text-center align-items-center justify-content-between rounded-sm">
              <p className="fs-4">{getDayLabel(index)}</p>
              <p className="fs-5">
                Max: {day.day.maxtemp_c}°C / Min: {day.day.mintemp_c}°C
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default WeeklyWeather;
