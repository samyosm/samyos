const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        neutral: colors.slate,
        success: colors.emerald,
        danger: colors.red,
        other: colors.blue,
      },
    },
  },
};
