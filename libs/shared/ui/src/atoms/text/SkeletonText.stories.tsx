import type { Meta } from '@storybook/react';
import { SkeletonText } from './SkeletonText';

export default {
  component: SkeletonText,
  tags: ['autodocs'],
  args: {
    children: 'Dream big and dare to fail.'
  }
} satisfies Meta<typeof SkeletonText>;


/** To be used for big title pages.
 *
 * Note: At most one per page. */
export const Page = {
  args: {
    variant: 'page',
  }
};

/** To be used for sections in a page. */
export const Section = {
  args: {
    variant: 'section',
  },
};

/** To be used for organism titles. */
export const Organism = {
  args: {
    variant: 'organism',
  },
};

/** To be used for unimportant elements.
 * E.g. disclosures, copyright, non-essential descriptions. */
export const Unemphasized = {
  args: {
    variant: 'unemphasized',
  },
};







