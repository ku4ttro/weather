import axios from 'axios';

const API_KEY= '03dd75db0f20e6b333622bc32f772a93';
// ES6 syntax - Template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // see example in: https://github.com/mzabriskie/axios
  const request = axios.get(url);
  //console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    // payload contains aditional data from this particular action
    payload: request
  }
}
