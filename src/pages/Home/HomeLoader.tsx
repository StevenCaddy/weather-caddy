import React, { useState, useEffect } from 'react';
import Home from './Home';
import { useGetWeatherData } from '../../queries/weather';

const HomeLoader: React.FC = () => {
  const [city, setCity] = useState<string | undefined>('Kansas City');
  const { data: weatherData, refetch } = useGetWeatherData(city);
  const weatherID = weatherData?.weather && weatherData?.weather.length ? weatherData?.weather[0].id : null;

  useEffect(() => {
    refetch();
  }, [city, refetch]);
  console.log(weatherID);

  return <Home weatherID={weatherID} weatherData={weatherData} setCity={setCity} />;
};

export default HomeLoader;
