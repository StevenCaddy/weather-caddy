import React from 'react';
import moment from 'moment';

export interface SunsetProps {
  value?: number;
  timeZone?: number;
}

const Sunset: React.FC<SunsetProps> = ({ value, timeZone = 0 }) => {
  if (!value) {
    return null;
  }

  var dt = new Date(0);
  dt.setUTCSeconds(value);
  let localDT = moment.utc(dt).utcOffset(timeZone / 3600);

  return (
    <>
      <div>{localDT.format('h:mm A')}</div>
    </>
  );
};

export default Sunset;
