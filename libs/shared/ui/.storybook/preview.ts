import './style.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    controls: {
      exclude: ['className'],
    },
  },
};

export default preview;
