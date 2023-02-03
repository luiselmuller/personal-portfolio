/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'secondary-bg': ' ',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
