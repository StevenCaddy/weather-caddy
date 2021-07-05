import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Adjective, { AdjectiveProps } from './adjective';

export default {
  title: 'Components/adjective',
  component: Adjective,
  argTypes: {
    weatherID: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta;

export const Template: Story<AdjectiveProps> = ({ weatherID }) => <Adjective weatherID={weatherID} />;
