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

export interface DailyIconProps {
  weatherDailyID?: number | null;
}

const DailyIcon: React.FC<DailyIconProps> = ({ weatherDailyID }) => {
  let weatherIcon: IconDefinition;
  if (weatherDailyID && 200 <= weatherDailyID && weatherDailyID < 500) {
    weatherIcon = faBolt;
  } else if (weatherDailyID && 500 <= weatherDailyID && weatherDailyID < 600) {
    weatherIcon = faCloudRain;
  } else if (weatherDailyID && 600 <= weatherDailyID && weatherDailyID < 700) {
    weatherIcon = faSnowflake;
  } else if (weatherDailyID && 700 <= weatherDailyID && weatherDailyID < 800) {
    weatherIcon = faExclamationTriangle;
  } else if (weatherDailyID && 800 === weatherDailyID) {
    weatherIcon = faSun;
  } else if (801 === weatherDailyID || 802 === weatherDailyID) {
    weatherIcon = faCloudSun;
  } else if (weatherDailyID && 803 <= weatherDailyID) {
    weatherIcon = faCloud;
  } else {
    weatherIcon = faExclamationCircle;
  }
  return (
    <div className="px-4">
      <FontAwesomeIcon icon={weatherIcon} />
    </div>
  );
};

export default DailyIcon;
