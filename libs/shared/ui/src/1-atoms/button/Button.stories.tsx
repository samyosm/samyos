import type { Meta } from '@storybook/react';
import { Button } from './Button';
import { Text } from '../text/Text';
import { IoMdCompass as Icon } from 'react-icons/io';

export default {
  component: Button,
  tags: ['autodocs'],
  argTypes: { onClick: {} },
  args: {
    size: 'md',
    variant: 'soft',
    children: <Text TrailingIcon={Icon}>Hello, world!</Text>,

  }
} satisfies Meta<typeof Button>;

export const Primary = {
  args: {

  }
};
