import React from 'react';
import CurrentWeather from './CurrentWeather';
const WeatherDisplay = (props) => (
    <div>
        <CurrentWeather weather={props.data}/>
    </div>
);

export {WeatherDisplay};