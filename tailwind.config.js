const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Menlo', ...defaultTheme.fontFamily.mono]
    },
    extend: {}
  },
  plugins: []
}
