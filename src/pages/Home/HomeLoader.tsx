import React, { useState, useEffect } from 'react';
import Home from './Home';
import { useGetWeatherData, useGetWeatherOneCallData } from '../../queries/weather';
import { Coordinates } from '../../interfaces/weather';

const HomeLoader: React.FC = () => {
  const [city, setCity] = useState<string | undefined>('Kansas City');
  const { data: weatherData, refetch: refetchWeatherData } = useGetWeatherData(city, { onSuccess: (data) => setCoordinates(data.coord) });
  const weatherID = weatherData?.weather && weatherData?.weather.length ? weatherData?.weather[0].id : null;
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>({ lon: -94.5786, lat: 39.0997 });
  const { mutateAsync: callOneWeatherData, data: weatherOneCallData } = useGetWeatherOneCallData();

  useEffect(() => {
    refetchWeatherData();
  }, [city, refetchWeatherData]);

  useEffect(() => {
    if (coordinates) {
      callOneWeatherData({ coordinates });
    }
  }, [coordinates, callOneWeatherData]);

  return <Home weatherID={weatherID} weatherData={weatherData} weatherOneCallData={weatherOneCallData} setCity={setCity} />;
};

export default HomeLoader;
