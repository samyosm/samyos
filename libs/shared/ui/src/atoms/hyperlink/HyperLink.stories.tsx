import type { Meta } from '@storybook/react';
import { HyperLink } from './HyperLink';

export default {
  component: HyperLink,
  tags: ['autodocs'],
  args: {
    children: 'Link',
    href: '/',
    target: '_blank',
    variant: 'primary',
  }
} satisfies Meta<typeof HyperLink>;

/** For links in the main navigation menu. */
export const Primary = {
  args: {
    variant: 'primary',
  }
};

/** For links other than the main navigation. */
export const Secondary = {
  args: {
    variant: 'secondary'
  }
};

/** For links we don't really want a visitor to click; e.g. policies. */
export const Tetiary = {
  args: {
    variant: 'tetiary'
  }
};

/** When we want the visitor to stay in the page we are sending him to.
 *
 * E.g.: pricing page or conversion page.
 * */
export const TargetSelf = {
  args: {
    target: '_self'
  }
};





