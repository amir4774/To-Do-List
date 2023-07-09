/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./work/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440'
    },
    extend: {
      colors: {
        brighRed: 'hsl(12, 88%, 59%)',
        brighRedLight: 'hsl(12, 88%, 69%)',
        brighRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(12, 100%, 96%)',
        veryLigthGray: 'hsl(0, 0%, 98%)',
        goodBlack: '#333',
      }
    },
  },
  plugins: [],
}

