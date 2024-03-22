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
        poppins: ['Poppins', 'sans-serif'],
        oleoScript: ['Oleo Script', 'system-ui']
      },
      width: {
        '300': '300%'
      },
      colors: {
        'primary': '#ffde17',
        'secondary': '#ec9228',
        'default': '#1b1c1e'
      }
    },
  },
  plugins: [],
}

