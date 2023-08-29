import type { Meta } from '@storybook/react';
import { Text } from './Text';
import { IoMdCompass as Icon } from 'react-icons/io';

export default {
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'World',
    size: 'md',
    level: 'atom',
    color: 'neutral',
    LeadingIcon: Icon,
    TrailingIcon: Icon
  }
} satisfies Meta<typeof Text>;

export const Primary = {
  args: {

  }
};
