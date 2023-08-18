import './style.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['icon', 'className'],
    },
  },
};

export default preview;
