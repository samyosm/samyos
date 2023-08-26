import './style.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      exclude: ['LeadingIcon', 'TrailingIcon', 'className'],
    },
  },
};

export default preview;
