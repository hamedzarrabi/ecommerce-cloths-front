/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenHamedLight: '#ace3e1',
        greenHamed: '#81C2BE',
        greenHamedDark: '#558986',
        redHamed: '',
      }
    },
  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ],
}

