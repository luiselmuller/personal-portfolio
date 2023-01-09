/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(206,100%,6%)',
        'primary': 'hsl(153,63%,51%)',
        'primary-hover': 'hsl(153,63%,70%)',
        'secondary': '',
        'grayish-white': 'hsl(0,0%,94%)',
      },
      transitionProperty: {
        'width': 'width'
      },
      boxShadow: {
        'button': '5px 5px 0px 0px rgba(0,0,0,0.78)',
        'button-two': '-5px 5px 0px 0px rgba(0,0,0,0.78)'
      }
    }
  },
  plugins: []
};