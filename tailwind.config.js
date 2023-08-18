const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.yellow,
          text: colors.white,
        },
        secondary: {
          ...colors.indigo,
          text: colors.white,
        },
      },
    },
  },
};
