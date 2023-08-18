import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { MdChevronRight as Icon } from 'react-icons/md';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;
// type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    label: 'label',
    variant: 'primary'
  } satisfies ButtonProps,
};

export const Secondary = {
  args: {
    label: 'label',
    variant: 'secondary',
  } satisfies ButtonProps,
};

export const WithIcon = {
  args: {
    label: 'Hello, world!',
    icon: <Icon />,
  } satisfies ButtonProps,
};





