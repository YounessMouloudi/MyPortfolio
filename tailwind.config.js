/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./dist/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      width: {
        'custom48' : '48.8%',
      },
      fontFamily:{
        'italiano'  : ['Italianno','cursive'],
        'libre'     : ['Libre Baskerville','serif'],
        'quicksand' : ['Quicksand','sans-serif'],
        'playfair'  : ['Playfair Display','serif'],
        'poppins'   : ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark' : '#0d0f12'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

