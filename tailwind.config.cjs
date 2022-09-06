/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'cascade1': 'cascade 1.5s 0.15s ease infinite backwards',
        'cascade2': 'cascade 1.5s 0.3s ease infinite backwards',
        'cascade3': 'cascade 1.5s 0.45s ease infinite backwards',
        'cascade4': 'cascade 1.5s 0.6s ease infinite backwards',
        'cascade5': 'cascade 1.5s 0.75s ease infinite backwards',
        'flask-beat': 'beat 1s infinite ease'
      },
      keyframes: {
        cascade: {
          '0%': { opacity: '0', transform: 'translateY(-250%)' },
          '30%, 60%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(250%)' }
        },
        beat: {
          '0%': {scale: '1', color: 'red'},
          '50%': {scale: '1.3', color: 'red'},
          '100%': {scale: '1', color: 'red'},
        }
      },
      gridTemplateColumns: {
        animation: 'repeat(5, 20px)',
        elementosXL: 'repeat(18, 65px)',
        elementosLG: 'repeat(18, 50px)',
        elementosMD: 'repeat(18, 30px)',
        elementosSM: 'repeat(18, 15px)'
      },
      gridTemplateRows: {
        elementosXL: 'repeat(10, 65px)',
        elementosLG: 'repeat(10, 50px)',
        elementosMD: 'repeat(10, 30px)',
        elementosSM: 'repeat(10, 15px)'
      },
      colors: {
        elementos: {
          nm: '#30d23f',
          ma: '#614838',
          mat: '#e7b22d',
          mt: '#b5ab94',
          la: '#ee75ff',
          ac: '#c540c1',
          mp: '#a2c49d',
          ml: '#2f8a21',
          ha: '#9be2e3',
          gn: '#0f63ec'
        }
      }
    },
  },
  plugins: [],
}
