import { useQuery } from 'react-query';
import { OPEN_WEATHER_API_ID, OPEN_WEATHER_API_ROOT } from '../declarations/constants';
import { WeatherResponse } from '../interfaces/weather';

export const useGetWeatherData = (city: string = 'Kansas City') => {
  if (!city) {
    city = 'Kansas City';
  }
  return useQuery<WeatherResponse>('weatherData', () => {
    return fetch(`${OPEN_WEATHER_API_ROOT}/data/2.5/weather?q=${city}&units=imperial&appid=${OPEN_WEATHER_API_ID}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  });
};
