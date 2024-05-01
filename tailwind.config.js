/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', 'index.html'],
  theme: {
    fontFamily: {
      OpenSans: ['Open Sans'],
      Montserrat: ['Montserrat'],
      Anton: ['Anton'],
    },
    extend: {
      colors: {
        background: '#F0F0F0',
        grn: '#43766C',
        abu: '#272829',
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
