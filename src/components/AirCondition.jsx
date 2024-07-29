import React from 'react'
import Card from './Card'

const AirCondition = ({currentWeather,todayForecast}) => {
  return (
    <div className='w-100 fs-4 mt-5 h-50 d-flex flex-column justify-content-between'>
        <div className="d-flex w-100 justify-content-between">
            <Card title={'Feels Like'} value={currentWeather.feelslike_c} unit={'°C'}/>
            <Card title={'Wind'} value={currentWeather.gust_kph} unit={'km/ph'}/>
            <Card title={'UV Index'} value={currentWeather.uv}/>
        </div>
        <div className="d-flex w-100 justify-content-between">
            <Card title= {'Humidity'} value={currentWeather.humidity} unit={'%'}/>
            <Card title={'Chance of Rain'} value={todayForecast.daily_chance_of_rain}  unit={'%'}/>
            <Card title={'Air Quality'} value={currentWeather.air_quality['pm2_5']} unit={'pm2.5'}/>
        </div>
    </div>
  )
}

export default AirCondition