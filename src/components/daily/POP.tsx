import React from 'react';

export interface POPInterface {
  value?: number;
}

const PercentPercipitation: React.FC<POPInterface> = ({ value = 0 }) => {
  value = value * 100;
  return (
    <div>
      <span>{value ? value.toFixed(0) : '0'}</span>%
    </div>
  );
};

export default PercentPercipitation;
