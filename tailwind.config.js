/** @type {import('tailwindcss').Config} */

const colors = {
  main: '#129081',
  secondary: '#2C3B38',
  red: '#EE4C39',
  white: '#EAEFF3',
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': `linear-gradient(180deg, ${colors.main} 0%, ${colors.secondary} 100%)`,
      },
      fontFamily: {
        headlines: ['LoveCraft', 'serif'],
        text: ['Bodoni-72', 'serif'],
      },
      textShadow: {
        papercut: '5px 0px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundColor: {
        ...colors,
      },
      textColor: {
        ...colors,
      },
    },
  },
  plugins: [],
}
