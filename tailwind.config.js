module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gris: '#93B4B3',
        griis: '#558D8B',
        turk: '#00FBFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
