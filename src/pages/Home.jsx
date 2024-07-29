import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import CurrentWeather from '../components/CurrentWeather';
import HourlyWeather from '../components/HourlyWeather';
import WeeklyWeather from '../components/WeeklyWeather';
import AirCondition from '../components/AirCondition';

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
    const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes`;
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
        <div className="position-relative">
          <input 
            type="text" 
            className="form-control pe-5"
            placeholder="Enter city name" 
            value={searchCity} 
            onChange={(e) => setSearchCity(e.target.value)} 
          />
          <span className="position-absolute top-50 end-0 translate-middle-y pe-3">
            <FaSearch />
          </span>
        </div>
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
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <CurrentWeather currentWeather={currentWeather} />
              <HourlyWeather hourlyForecast={hourlyForecast} />
              <AirCondition currentWeather={currentWeather} todayForecast={todayForecast} />
            </div>
            <div>
              <WeeklyWeather forecast={forecast} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
