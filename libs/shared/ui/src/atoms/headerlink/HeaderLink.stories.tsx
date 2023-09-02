import type { Meta } from '@storybook/react';
import { HeaderLink } from './HeaderLink';

export default {
  component: HeaderLink,
  tags: ['autodocs'],
  args: {
    href: '/',
    label: 'Label',
    locale: 'en'
  },
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    )
  ]
} satisfies Meta<typeof HeaderLink>;

export const Primary = {
  args: {

  }
};
