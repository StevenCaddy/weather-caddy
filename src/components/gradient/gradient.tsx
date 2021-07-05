import React from 'react';

export interface GradientProps {
  weatherID: number;
}

const Gradient: React.FC<GradientProps> = ({ weatherID, children }) => {
  let weatherStyle: string;
  if (200 <= weatherID && weatherID < 500) {
    weatherStyle = 'from-gray-200 via-blue-500 to-purple-500';
  } else if (500 <= weatherID && weatherID < 600) {
    weatherStyle = 'from-gray-400 via-blue-300 to-blue-600';
  } else if (600 <= weatherID && weatherID < 700) {
    weatherStyle = 'from-white-400 via-gray-100 to-gray-500';
  } else if (700 <= weatherID && weatherID < 800) {
    weatherStyle = 'from-red-300 via-orange-500 to-red-600';
  } else if (800 === weatherID) {
    weatherStyle = 'from-purple-400 via-pink-500 to-red-500';
  } else if (801 === weatherID || 802 === weatherID) {
    weatherStyle = 'from-gray-300 via-blue-400 to-yellow-500';
  } else if (803 <= weatherID) {
    weatherStyle = 'from-gray-600 via-blue-200 to-gray-200';
  } else {
    weatherStyle = 'Null';
  }
  return <div className={'min-h-full bg-cover bg-gradient-to-b ' + weatherStyle}>{children}</div>;
};

export default Gradient;
