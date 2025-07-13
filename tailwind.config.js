/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'green': {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB69',
          500: '#4CAF4F',
          600: '#43A046',
          700: '#388E3B',
          800: '#237D31',
          900: '#1B5E1F',
          950: '#103E13',
        },
        'neutral': {
          100: '#F5F7FA',
          650: '#4D4D4D',
          'black': '#263238',
          'd_grey': '#4D4D4D',
          'grey': '#717171',
          'l_grey': '#89939E',
          'grey_blue': '#ABBED1',
          'silver': '#F5F7FA',
          'white': '#FFFFFF',
        },
        'gray': {
          500: '#717171'
        },
        'shade': {
          'shade1': '#43A046',
          'shade2': '#388E3B',
          'shade3': '#237D31',
          'shade4': '#1B5E1F',
          'shade5': '#103E13',
        },
        'tint': {
          'tint1': '#66BB69',
          'tint2': '#81C784',
          'tint3': '#A5D6A7',
          'tint4': '#C8E6C9',
          'tint5': '#E8F5E9',
        },
        'brand': {
          'primary': '#4CAF4F',
          'Secondary': '#263238',
          'Info': '#2194F3'
        },
        'action': {
          'warning': '#FBC02D',
          'error': '#E53835',
          'success': '#2E7D31',
        }
      },
      spacing: {
        '5.5': '1.375rem',
        '12.1': '3.125rem',
        '26.25': '6.5625rem',
        '30': '7.5rem',
        '150': '37.5rem',
        '5.25': '1.5625rem',
        '75': '18.75rem',
        '65': '16.25rem',
        '18': '4.5rem',
        '146': '36.5rem',
        '10.5': '2.625rem',
        '165': '41.25rem',
        '98': '24.5rem',
        '135': '33.75rem',
        '187': '46.75rem',
        '47.5': '11.875rem',
        '80': '20rem',
        '71': '17.75rem',
        '21': '5.25rem',
        '79': '19.75rem',
        '43.5': '10.875rem',
        '2.75': '0.6875rem'
      },
      fontSize: {
        '6xl': '4rem',
        '2.5xl': '1.75rem'
      },
      gap: {
        '26': '6.5rem',
        '19.5': '4.875rem'
      },
      dropShadow: {
        'shadow2': '0 2px 4px rgb(171, 190, 209, 0.6)',
        'shadow4': '0 4px 8px rgb(171, 190, 209, 0.4)',
        'shadow6': '0 6px 12px rgb(171, 190, 209, 0.3)',
        'shadow8': '0 8px 16px rgb(171, 190, 209, 0.4)',
        'shadow16': '0 16px 32px rgb(171, 190, 209, 0.3)',
      }
    },
  },
  plugins: [],
}

