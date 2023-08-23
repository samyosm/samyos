import type { Meta } from '@storybook/react';
import { Badge } from './Badge';
import { FaCircleDot as Icon } from 'react-icons/fa6';

export default {
  component: Badge,
  argTypes: { onClick: {} },
  tags: ['autodocs'],
  args: {
    children: 'label',
    variant: 'info',
    LeftIcon: Icon,
    loading: false,
  }
} satisfies Meta<typeof Badge>;

export const Info = {
  args: {}
};

export const Error = {
  args: {
    variant: 'error',
  },
};

export const Success = {
  args: {
    variant: 'success',
  },
};

export const WithIcon = {
  args: {
    LeftIcon: Icon,
    RightIcon: Icon
  },
};


export const Loading = {
  args: {
    loading: true
  },
};


