const fetch = require("node-fetch");
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5'
const OPEN_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class WeatherService {
    getWeather = async zip => {
        try{
            const url = `${OPEN_WEATHER_URL}/weather?appid=${OPEN_WEATHER_API_KEY}&zip=${zip},us&units=imperial`;
            console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch(error) {
            console.log(error);
        }
    }
}


export {WeatherService};