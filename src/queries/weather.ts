import { useQuery, UseQueryOptions } from 'react-query';
import { OPEN_WEATHER_API_ID, OPEN_WEATHER_API_ROOT } from '../declarations/constants';
import { WeatherResponse, WeatherOneCallResponse, Coordinates } from '../interfaces/weather';

export const useGetWeatherData = (city: string = 'Kansas City', options?: UseQueryOptions<WeatherResponse>) => {
  if (!city) {
    city = 'Kansas City';
  }
  return useQuery<WeatherResponse>(
    'weatherData',
    () => {
      return fetch(`${OPEN_WEATHER_API_ROOT}/data/2.5/weather?q=${city}&units=imperial&appid=${OPEN_WEATHER_API_ID}`)
        .then((res) => res.json())
        .catch((err) => console.error(err));
    },
    options
  );
};

export const useGetWeatherOneCallData = (coordinates?: Coordinates, options?: UseQueryOptions<WeatherOneCallResponse>) => {
  if (!coordinates) {
    throw 'No coordinates';
  }
  return useQuery<WeatherOneCallResponse>(
    'weatherDailyData',
    () => {
      return fetch(
        `${OPEN_WEATHER_API_ROOT}/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${OPEN_WEATHER_API_ID}`
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
    },
    options
  );
};
