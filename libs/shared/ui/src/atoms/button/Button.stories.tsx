import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  argTypes: { onClick: {} },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export const Primary = {
  args: {
    children: 'Label',
  } satisfies ButtonProps,
};
