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
  weatherID: number;
}

const Adjective: React.FC<AdjectiveProps> = ({ weatherID }) => {
  let weatherText: string;
  let weatherIcon: IconDefinition;
  if (200 <= weatherID && weatherID < 500) {
    weatherText = 'Thunderstorm';
    weatherIcon = faBolt;
  } else if (500 <= weatherID && weatherID < 600) {
    weatherText = 'Rain';
    weatherIcon = faCloudRain;
  } else if (600 <= weatherID && weatherID < 700) {
    weatherText = 'Snow';
    weatherIcon = faSnowflake;
  } else if (700 <= weatherID && weatherID < 800) {
    weatherText = 'Warning';
    weatherIcon = faExclamationTriangle;
  } else if (800 === weatherID) {
    weatherText = 'Clear';
    weatherIcon = faSun;
  } else if (801 === weatherID || 802 === weatherID) {
    weatherText = 'Partly Cloudy';
    weatherIcon = faCloudSun;
  } else if (803 <= weatherID) {
    weatherText = 'Cloudy';
    weatherIcon = faCloud;
  } else {
    weatherText = 'Null';
    weatherIcon = faExclamationCircle;
  }
  return (
    <div className="flex flex-row">
      <div className="px-4">
        <FontAwesomeIcon icon={weatherIcon} />
      </div>
      <div className="px-8">{weatherText}</div>
    </div>
  );
};

export default Adjective;
