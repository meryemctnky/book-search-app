/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      backgroundImage: {
        'header-pattern': "url('/header.jpg')",
      },
      colors: {
        olive: '#BFAF8F',
        ashen: '#D9D0C1',
        tan: '#A68D6F',
        sepia: '#73624D',
        pearl: '#F2F2F2',
        jet: '#3E3326',
        tequila: '#F2CEA2',
      },
      fontFamily: {
        sans: ['Inter', 'sans'],
        serif: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
