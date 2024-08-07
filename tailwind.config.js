/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        green : '#4CAF4F',

      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-optical-auto': {
          'font-optical-sizing': 'auto',
        },
        '.font-style-normal': {
          'font-style': 'normal',
        },
        '.font-slnt-0': {
          'font-variation-settings': '"slnt" 0',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ]
}