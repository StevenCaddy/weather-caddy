import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Temperature from './Temperature';

export default {
  title: 'Components/Temperature',
  component: Temperature,
} as Meta;

export const Primary = () => <Temperature label="Low" value={70} />;
