import React from 'react';

export interface TemperatureProps {
  label: string;
  value?: number | undefined;
}

const Temperature: React.FC<TemperatureProps> = ({ label, value = 0 }) => {
  value.toFixed(0);
  return (
    <div>
      {label} <span>{value ? value : '---'}</span>
    </div>
  );
};

export default Temperature;
