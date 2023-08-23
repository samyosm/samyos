import './style.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      exclude: ['className', 'LeftIcon', 'RightIcon'],
    },
  },
};

export default preview;
