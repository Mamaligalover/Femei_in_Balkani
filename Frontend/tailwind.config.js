/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
