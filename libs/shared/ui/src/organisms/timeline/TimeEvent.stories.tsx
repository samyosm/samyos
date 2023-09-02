import type { Meta } from '@storybook/react';

import { TimeEvent } from './TimeEvent';
import { IoMdCompass as Icon } from 'react-icons/io';
import { Timeline } from './Timeline';


export default {
  component: TimeEvent,
  tags: ['autodocs'],
  args: {
    date: new Date(2007, 6, 18),
    title: 'Samy is born',
    children: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    Icon,
  },
  decorators: [
    (Story) => (
      <Timeline>
        <Story />
      </Timeline>
    )
  ]
} satisfies Meta<typeof TimeEvent>;

export const Primary = {
  args: {

  }
};
