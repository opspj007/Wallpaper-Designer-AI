/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'rw-brown': '#4A341D',
        'rw-brown-light': '#6B5240',
        'rw-brown-dark': '#2E1F12',
        'rw-cream': '#F7F3EF',
        'rw-gold': '#C5A55A',
        'rw-gold-light': '#D4BC7E',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
