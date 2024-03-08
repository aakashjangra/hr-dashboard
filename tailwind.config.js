/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
      screens: {
      'xs': '400px',
      'md': '850px',
    },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        inter: '"Inter", sans-serif',
      },
      colors: {
        gray: '#686868',
        red: '#FF5151',
        'dark-red': 'rgba(180, 35, 24, 1)',
        'white-2': '#FAFAFA',
        'dark-blue': 'rgba(22, 30, 84, 1)',
        'dark-blue-2': '#1B204A',
        'dark-blue-3':'#121843',
        'light-red': '#FFEFE7',
        'blue': 'rgba(55, 134, 241, 1)',
        'light-blue': 'rgba(232, 240, 251, 1)',
        'light-purple': 'rgba(253, 235, 249, 1)',
        'purple': 'rgba(238, 97, 207, 1)',
      }
    },
  },
  plugins: [],
}