import type { Meta } from '@storybook/react';
import { Jumbotron } from './Jumbotron';
import { Button, Text } from '../../atoms';

export default {
  component: Jumbotron,
  tags: ['autodocs'],
  args: {

    title: <Text level='page' size='lg'>Effort fuels progress.</Text>,
    description: 'Be you, be proud of you, because, you can be do, what we want to do.',
    children: <Button className='w-fit'>Be proud</Button>

  }
} satisfies Meta<typeof Jumbotron>;

export const Primary = {
  args: {}
};
