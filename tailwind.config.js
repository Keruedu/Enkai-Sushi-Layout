/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
        primary: {
          50: '#fef2f4',
          100: '#fde2e7',
          200: '#fbc2d1',
          300: '#f7a1b5',
          400: '#f0718a',
          500: '#EF405B', // Main primary color - Enkai pink
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },        secondary: {
          50: '#f1f2f7',
          100: '#e8eaf0',
          200: '#d5d8e3',
          300: '#b8bdd0',
          400: '#969cb7',
          500: '#7a81a0',
          600: '#666d8a',
          700: '#565c75',
          800: '#494e62',
          900: '#2A315D', // Main secondary color - Updated to new color
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },      fontFamily: {
        sans: ['Unbounded', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        unbounded: ['Unbounded', 'system-ui', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        phudu: ['Phudu', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
