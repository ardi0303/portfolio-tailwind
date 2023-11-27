/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['portfolio - tailwind.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#0f766e'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

