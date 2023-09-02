import type { Meta } from '@storybook/react';
import { Pedestral } from './Pedestral';
import { IoMdCompass as Symbol } from 'react-icons/io';
import { Button } from '../../atoms/button';

export default {
  component: Pedestral,
  tags: ['autodocs'],
  args: {
    title: 'Pedestral Title',
    Symbol,
    description: 'A pedestral allows you to give extra information about something.',
  }
} satisfies Meta<typeof Pedestral>;

export const Primary = {
  args: {}
};

export const WithButton = {
  args: {
    children: <Button>CTA</Button>
  }
};

