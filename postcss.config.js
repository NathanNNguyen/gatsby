const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
  theme: {
    fontFamily: {
      'dance': 'Dancing Script, Arial, sans-serif'
    }
  }
}