import React from 'react';
import Temperature from '../temperature/Temperature';
import DateOfMonth from './DateOfMonth';
import DayOfWeek from './DayOfWeek';
import DailyIcon from './dailyIcon';
import PercentPercipitation from './POP';
import { DailyWeather } from '../../interfaces/weather';

export interface DailyForecastTableProps {
  weatherData?: Array<DailyWeather>;
}

const DailyForecastTable: React.FC<DailyForecastTableProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <React.Fragment />;
  }
  return (
    <div className="flex flex-row overflow-x-auto overflow-visible no-scrollbar mt-10">
      {weatherData.map((day) => {
        return (
          <div className="flex flex-col mr-3">
            <div className="text-center">
              <DayOfWeek value={day.dt} />
            </div>
            <div className="text-center">
              <DateOfMonth value={day.dt}></DateOfMonth>
            </div>
            <div className="text-center">
              <Temperature label="" value={day.temp.max} />
            </div>
            <div className="text-center">
              <Temperature label="" value={day.temp.min} />
            </div>
            <div className="text-center">
              <DailyIcon weatherDailyID={day.weather[0].id} />
            </div>
            <div className="text-center">
              <PercentPercipitation value={day.pop} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecastTable;
