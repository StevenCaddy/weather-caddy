import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
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

export const useGetWeatherOneCallData = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<WeatherOneCallResponse, TError, { coordinates: Coordinates }, TContext>
) => {
  return useMutation<WeatherOneCallResponse, TError, { coordinates: Coordinates }, TContext>(
    async ({ coordinates }: { coordinates: Coordinates }) => {
      return fetch(
        `${OPEN_WEATHER_API_ROOT}/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${OPEN_WEATHER_API_ID}`
      ).then((res) => res.json());
    },
    options
  );
};

//lat: 39.0997, lon: -94.5786
