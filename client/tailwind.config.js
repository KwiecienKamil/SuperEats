/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1320px'
    },
    extend: {
      colors: {
        gray: '#EEEEEE',
        darkgray: '#d9d9d9',
        darkerGray: '#cecccc',
        lightBlack: '#030303',
        rgba: 'rgba(0,0,0.7)'
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Roboto: "font-family: 'Roboto', sans-serif;"
    },
  }
  },
  plugins: [],
}

