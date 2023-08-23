import type { Meta } from '@storybook/react';
import { Divider } from './Divider';
import { Button } from '../button/Button';

export default {
  component: Divider,
  tags: ['autodocs'],
  args: {
    children: (<div className='flex w-full justify-between'>
      <p>Left</p>
      <p>Center</p>
      <p>Right</p>
    </div>)
  }
} satisfies Meta<typeof Divider>;

export const Primary = {
  args: {},
};

export const ButtonExample = {
  args: {
    children: (
      <div className='bg-white w-fit mx-auto px-2'>
        <Button>
          Click Me
        </Button>
      </div>
    )
  },
};

