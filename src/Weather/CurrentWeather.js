import React from 'react';

const CurrentWeather = (props) => {
    const weather = props.weather !== null ? props.weather : null;

    if(weather !== null) {
        console.log(weather);
        const divStyle = {
            border: '1px solid black',
            margin: 'auto',
            width: '20%'
        }

        const childStyle = {
            margin: '5px'
        }

        const headerBackground = {
            backgroundColor: '#F5F5F5'
        }
        let cityName = weather.name;
        let humidity = weather.main.humidity;
        let temperature = weather.main.temp;
        let windSpeed = weather.wind.speed;
        let weatherCondition = weather.weather[0].main;
        
        return(
            <div style={divStyle}>
                <h1 style={headerBackground}>{cityName}</h1>
                <div style={childStyle}>
                    <h3>Temperature: {temperature} &#8457;</h3>
                    <h3>Humidity: {humidity}&#37;</h3>
                    <h3>Wind Speed: {windSpeed} mph</h3>
                    <h3>Conditions: {weatherCondition}</h3>
                </div>
            </div>);
    } else {
        return <h3>No weather available!</h3>
    }

};

export default CurrentWeather;