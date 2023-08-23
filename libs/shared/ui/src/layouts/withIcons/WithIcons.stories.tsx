import type { Meta } from '@storybook/react';
import { WithIcons, WithIconsProps } from './WithIcons';
import { GoDotFill as Icon } from 'react-icons/go';

export default {
  component: WithIcons,
  tags: ['autodocs'],
} satisfies Meta<typeof WithIcons>;

export const Primary = {
  args: {
    RightIcon: Icon,
    LeftIcon: Icon,
    children: 'Text'
  } satisfies WithIconsProps,
};
