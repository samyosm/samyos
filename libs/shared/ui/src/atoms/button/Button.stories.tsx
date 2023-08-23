import type { Meta } from '@storybook/react';
import { Button } from './Button';
import { FaCompass as Icon } from "react-icons/fa6";

export default {
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Label',
    size: 'base',
    RightIcon: Icon,
    loading: false,
    variant: 'primary',
  }
} satisfies Meta<typeof Button>;


/** To be used for important actions. **(Max. 2 per view)** */
export const Primary = {
  args: {
    variant: 'primary',
  },
};

/** To be used for non-important actions. */
export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

/** To be used for discouraged or unwanted actions. */
export const Tetiary = {
  args: {
    variant: 'tetiary',
  },
};


export const WithIcons = {
  args: {
    RightIcon: Icon,
    LeftIcon: Icon,
  },
};

/** To be used inside a small component. */
export const Small = {
  args: {
    size: 'small',
  },
};

/** To be used inside a small component. */
export const Loading = {
  args: {
    loading: true,
  },
};






