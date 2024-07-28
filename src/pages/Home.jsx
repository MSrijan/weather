import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentWeather from '../components/CurrentWeather';
import HourlyWeather from '../components/HourlyWeather';
import WeeklyWeather from '../components/WeeklyWeather';

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [searchCity, setSearchCity] = useState('Kathmandu');
  const [city, setCity] = useState('Kathmandu');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'b7bbbd4816f34ed7beb81350242807';

  const fetchWeatherData = async (city) => {
    const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('City not found');
      }
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherData(city);
        setCurrentWeather(data.current);
        setTodayForecast(data.forecast.forecastday[0].day);
        setForecast(data.forecast.forecastday);
        const hourlyData = data.forecast.forecastday[0].hour.filter((_, index) => index % 3 === 0);
        setHourlyForecast(hourlyData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCity(searchCity);
  };

  return (
    <div className='container'>
      <h1 className="my-4">{city}</h1>
      <form className="mb-4" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter city name" 
          value={searchCity} 
          onChange={(e) => setSearchCity(e.target.value)} 
        />
      </form>
      {loading ? (
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      ) : error ? (
        <div className="text-center">
          <h2>{error}</h2>
        </div>
      ) : (
        <>
          <div className="d-flex flex-wrap">
            <div>
              <CurrentWeather currentWeather={currentWeather} todayForecast={todayForecast} />
              <HourlyWeather hourlyForecast={hourlyForecast} />
            </div>
            <WeeklyWeather forecast={forecast} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
