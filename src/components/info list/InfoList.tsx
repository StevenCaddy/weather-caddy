import React from 'react';

export interface InfoListProps {
  feelsLike?: number;
  humidity?: number;
  pressure?: number;
  windSpeed?: number;
  windDeg?: number;
}

const InfoList: React.FC<InfoListProps> = ({ feelsLike, humidity, pressure, windSpeed, windDeg = 0 }) => {
  let windDirection: string;
  if (337.5 < windDeg || windDeg <= 22.5) {
    windDirection = 'North';
  } else if (22.5 < windDeg && windDeg <= 67.5) {
    windDirection = 'Northeast';
  } else if (67.5 < windDeg && windDeg <= 112.5) {
    windDirection = 'East';
  } else if (112.5 < windDeg && windDeg <= 157.5) {
    windDirection = 'Southeast';
  } else if (157.5 < windDeg && windDeg <= 202.5) {
    windDirection = 'South';
  } else if (202.5 < windDeg && windDeg <= 247.5) {
    windDirection = 'Southwest';
  } else if (247.5 < windDeg && windDeg <= 292.5) {
    windDirection = 'West';
  } else if (292.5 < windDeg && windDeg <= 337.5) {
    windDirection = 'Northwest';
  } else {
    windDirection = 'Null';
  }
  return (
    <div className="text-xs">
      <div className="leading-4">Feels like: {feelsLike}F</div>
      <div className="leading-4">Humidity: {humidity}%</div>
      <div className="leading-4">Pressure: {pressure} hPa</div>
      <div className="leading-4">Wind Speed: {windSpeed} mph</div>
      <div className="leading-4">Wind Direction: {windDirection}</div>
    </div>
  );
};

export default InfoList;
