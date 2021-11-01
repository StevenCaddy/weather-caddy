import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudSun,
  faSun,
  faExclamationTriangle,
  faSnowflake,
  faCloudRain,
  faBolt,
  IconDefinition,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export interface AdjectiveProps {
  weatherID: number | null;
}

const Adjective: React.FC<AdjectiveProps> = ({ weatherID }) => {
  let weatherText: string;
  let weatherIcon: IconDefinition;
  if (weatherID && 200 <= weatherID && weatherID < 500) {
    weatherText = 'Thunderstorm';
    weatherIcon = faBolt;
  } else if (weatherID && 500 <= weatherID && weatherID < 600) {
    weatherText = 'Rain';
    weatherIcon = faCloudRain;
  } else if (weatherID && 600 <= weatherID && weatherID < 700) {
    weatherText = 'Snow';
    weatherIcon = faSnowflake;
  } else if (weatherID && 700 <= weatherID && weatherID < 800) {
    weatherText = 'Warning';
    weatherIcon = faExclamationTriangle;
  } else if (weatherID && 800 === weatherID) {
    weatherText = 'Clear';
    weatherIcon = faSun;
  } else if (801 === weatherID || 802 === weatherID) {
    weatherText = 'Partly Cloudy';
    weatherIcon = faCloudSun;
  } else if (weatherID && 803 <= weatherID) {
    weatherText = 'Cloudy';
    weatherIcon = faCloud;
  } else {
    weatherText = 'Null';
    weatherIcon = faExclamationCircle;
  }
  return (
    <div className="flex flex-row md:justify-center md:text-2xl">
      <div className="px-2 ml-4 md:ml-20 md:mr-8">
        <FontAwesomeIcon icon={weatherIcon} />
      </div>
      <div className="px-4 text-lg md:mr-40">{weatherText}</div>
    </div>
  );
};

export default Adjective;
