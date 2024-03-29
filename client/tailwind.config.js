/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      height: {
        dscreen: '100dvh',
      },
      width: {
        dscreen: '100dvw',
      },
      colors: {
        background: '#E7E7E7',
        primary: '#FFFFFF',
        secondary: '#CECECE',
      },
      textColor: {
        primary: '#433F3F',
        primaryLight: '#686767',
        primaryDark: '#222222',
        secondary: '#E7E7E7',
      },
      fontFamily: {
        workSans: "'Work Sans', sans-serif;",
      },
    },
  },
  plugins: [],
};
