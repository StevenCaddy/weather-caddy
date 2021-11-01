import React from 'react';

export interface TemperatureProps {
  label: string;
  value?: number;
}

const Temperature: React.FC<TemperatureProps> = ({ label, value = 0 }) => {
  return (
    <div>
      {label} <span>{value ? value.toFixed(0) : '---'}</span> F
    </div>
  );
};

export default Temperature;
