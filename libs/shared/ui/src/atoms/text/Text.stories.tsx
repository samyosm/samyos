import type { Meta } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

const PREVIEW_TEXT = 'Dream big and dare to fail.'

/** To be used for big title pages.
 *
 * Note: At most one per page. */
export const Page = {
  args: {
    children: PREVIEW_TEXT,
    variant: 'page',
  } satisfies TextProps,
};

/** To be used for sections in a page. */
export const Section = {
  args: {
    children: PREVIEW_TEXT,
    variant: 'section',
  } satisfies TextProps,
};

/** To be used for organism titles. */
export const Organism = {
  args: {
    children: PREVIEW_TEXT,
    variant: 'organism',
  } satisfies TextProps,
};

/** To be used for unimportant elements.
 * E.g. disclosures, copyright, non-essential descriptions. */
export const Unemphasized = {
  args: {
    children: PREVIEW_TEXT,
    variant: 'unemphasized',
  } satisfies TextProps,
};







