import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { IoCompass as Icon } from "react-icons/io5";

export default {
  component: Button,
  argTypes: { onClick: {} },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

/** To be used for important actions. **(Max. 2 per view)** */
export const Primary = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'base',
    RightIcon: Icon,
  } satisfies ButtonProps,
};

/** To be used for non-important actions. */
export const Secondary = {
  args: {
    children: 'Label',
    variant: 'secondary',
    size: 'base',
    RightIcon: Icon,
  } satisfies ButtonProps,
};

/** To be used for discouraged or unwanted actions. */
export const Tetiary = {
  args: {
    children: 'Label',
    variant: 'tetiary',
    size: 'base',
    RightIcon: Icon,
  } satisfies ButtonProps,
};

export const WithIcons = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'base',
    RightIcon: Icon,
    LeftIcon: Icon,
  } satisfies ButtonProps,
};

/** To be used inside a small component. */
export const Small = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'small',
    RightIcon: Icon,
  } satisfies ButtonProps,
};






