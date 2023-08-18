import type { Meta, StoryObj } from '@storybook/react';
import { HeaderItem, HeaderItemProps } from './HeaderItem';
import { MdHome as Icon } from "react-icons/md"

const meta: Meta<typeof HeaderItem> = {
  component: HeaderItem,
  title: 'HeaderItem',
};

export default meta;
type Story = StoryObj<typeof HeaderItem>;

export const Primary: Story = {
  args: {
    label: 'Header Item',
    href: '/',
    icon: <Icon />
  } satisfies HeaderItemProps,
  decorators: [
    (Story) => (
      <ul><Story /></ul>
    )
  ]
};
