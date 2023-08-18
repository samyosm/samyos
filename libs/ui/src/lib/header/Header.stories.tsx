import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from './Header';
import { MdWorkHistory as Icon } from 'react-icons/md';
import { Button } from '../button/Button';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  parameters: {
    controls: {
      exclude: ['verticalCTA', 'horizontalCTA'],
    },
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {
    verticalCTA: <Button className='mx-auto' variant='primary' label='Subscribe to me' />,
    horizontalCTA: <Button variant='primary' label='Click Here!' />,
    items: [
      {
        label: 'My Projects',
        href: '/projects',
        icon: <Icon />
      },
      {
        label: 'Home',
        href: '/',
        icon: <Icon />
      },
      {
        label: 'Who am I?',
        href: '/projects',
        icon: <Icon />
      },
    ]
  } satisfies HeaderProps,
};
