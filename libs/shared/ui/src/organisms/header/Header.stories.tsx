import type { Meta } from '@storybook/react';
import { Header } from './Header';
import { Text } from '../../atoms/text/Text';

export default {
  component: Header,
  tags: ['autodocs'],
  args: {
    items: [
      {
        label: 'Home',
        locale: 'en',
        href: '/',
      },
      {
        label: 'Learn',
        locale: 'en',
        href: '/learn',
      },
      {
        label: 'Watch',
        locale: 'en',
        href: '/watch',
      }
    ],
    logo: <Text level='organism'>SamyOs</Text>
  }
} satisfies Meta<typeof Header>;

export const Primary = {
  args: {

  }
};
