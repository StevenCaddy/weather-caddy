import React from 'react';
import moment from 'moment';

export interface TimeStampProps {
  value?: number;
  timeZone?: number;
}

const TimeStamp: React.FC<TimeStampProps> = ({ value, timeZone = 0 }) => {
  if (!value) {
    return null;
  }

  var dt = new Date(0);
  dt.setUTCSeconds(value);
  let localDT = moment.utc(dt).utcOffset(timeZone / 3600);

  return (
    <>
      <div>{localDT.format(' ddd Do ')}</div>
    </>
  );
};

export default TimeStamp;
