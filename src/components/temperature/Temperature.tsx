import React from 'react';

export interface TemperatureProps {
  label: string;
  value?: number;
}

const Temperature: React.FC<TemperatureProps> = ({ label, value }) => {
  return (
    <div>
      {label}: <span>{value ? value : '---'}</span> F
    </div>
  );
};

export default Temperature;
