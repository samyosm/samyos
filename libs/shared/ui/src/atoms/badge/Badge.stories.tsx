import type { Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { GoDotFill as Icon } from 'react-icons/go';

export default {
  component: Badge,
  argTypes: { onClick: {} },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export const Info = {
  args: {
    children: 'label',
    variant: 'info',
    LeftIcon: Icon
  } satisfies BadgeProps,
};

export const Error = {
  args: {
    children: 'label',
    variant: 'error',
    LeftIcon: Icon
  } satisfies BadgeProps,
};

export const Success = {
  args: {
    children: 'label',
    variant: 'success',
    LeftIcon: Icon
  } satisfies BadgeProps,
};

export const WithIcon = {
  args: {
    children: 'label',
    variant: 'info',
    LeftIcon: Icon,
    RightIcon: Icon
  } satisfies BadgeProps,
};


