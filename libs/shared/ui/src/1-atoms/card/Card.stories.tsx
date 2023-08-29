import type { Meta } from '@storybook/react';
import { Card } from './Card';

export default {
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Lorem',
    children: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
  }
} satisfies Meta<typeof Card>;

export const Primary = {
  args: {

  }
};
