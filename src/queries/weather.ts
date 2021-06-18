import { useQuery } from 'react-query';
import { WeatherResponse } from '../interfaces/weather';

const API_ROOT = 'https://api.openweathermap.org';
const APP_ID = process.env.REACT_APP_OPEN_WEATHER_API_ID;

export const useGetWeatherData = () => {
  return useQuery<WeatherResponse>('weatherData', () => {
    return fetch(API_ROOT + '/data/2.5/weather?q=chicago&units=imperial&appid=' + APP_ID)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  });
};
