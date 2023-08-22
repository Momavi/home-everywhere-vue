/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#090707',
        contrast: '#097FD9',
        card_bg: '#0D0D0D',
      }
    },
  },
  plugins: []
}
