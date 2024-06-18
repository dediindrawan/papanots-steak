/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/js/**/*.js',
    './pages/**/*.html',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      width: {
        '300': '300%'
      },
      colors: {
        'primary': '#ffde17',
        'secondary': '#ec9228',
        'default': '#1b1c1e'
      },
      keyframes: {
        'run-text': {
          '0%': {transform: 'translateX(100vw)'},
          '100%': {transform: 'translateX(-100%)'}
        }
      },
      animation: {
        'running-text': 'run-text 65s linear infinite'
      },
    },
  },
  plugins: [],
}

