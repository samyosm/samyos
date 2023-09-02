import type { Meta } from '@storybook/react';
import { Badge } from './Badge';
import { Text } from '../text';
import { IoMdCompass as Icon } from 'react-icons/io';

export default {
  component: Badge,
  tags: ['autodocs'],
  args: {
    variant: 'info',
    children: 'Tag'
  }
} satisfies Meta<typeof Badge>;

export const Info = {
  args: {
    variant: 'info'
  }
};

export const Success = {
  args: {
    variant: 'success'
  }
};

export const Danger = {
  args: {
    variant: 'danger'
  }
};

export const WithIcon = {
  args: {
    children: <Text TrailingIcon={Icon}>Tag</Text>,
  }
}


