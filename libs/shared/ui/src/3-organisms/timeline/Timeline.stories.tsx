import type { Meta } from '@storybook/react';
import { Timeline } from './Timeline';
import { TimeEvent } from './TimeEvent';
import { IoMdCompass as Icon } from 'react-icons/io';
import { Button } from '../../1-atoms';

const Timespans = () => (
  <>
    <TimeEvent
      Icon={Icon}
      date={new Date("2007-07-18T04:00:00.000Z")}
      title="Samy is born"
    >
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </TimeEvent>
    <TimeEvent
      Icon={Icon}
      date={new Date(2016, 5, 0)}
      title="Goes to Canada"
    >
      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.
    </TimeEvent>
    <TimeEvent
      Icon={Icon}
      date={new Date(2023, 9, 0)}
      title="Introduces Buttons"
    >
      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet.
      <Button className='mt-2'>Click Here</Button>
    </TimeEvent>


  </>
)

export default {
  component: Timeline,
  tags: ['autodocs'],
  args: {
    children: <Timespans />,
  }
} satisfies Meta<typeof Timeline>;

export const Primary = {
  args: {

  }
};
