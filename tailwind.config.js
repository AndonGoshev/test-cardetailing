/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        'luxury': {
          'black': '#0a0a0a',
          'red': '#dc2626',
          'white': '#ffffff',
          'gray': '#f3f4f6',
          'dark-gray': '#1a1a1a',
          'navy-blue': '#010057',
          'yellow': '#FDC57B'
        }
      },
      maxWidth: {
        '90': '90%',
        '95': '95%'
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a,rgb(45, 43, 5))',
      }
    },
  },
  plugins: [],
} 