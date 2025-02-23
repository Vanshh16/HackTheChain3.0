/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      animation: {
        'move-left': 'moveLeft 10s linear infinite',
        'move-right': 'moveRight 10s linear infinite',
        'swing': 'swing 2s ease-in-out infinite', // Pendulum swing animation
        'spin-slow': 'spin-slow 15s linear infinite',
        'revolve': 'revolve 10s linear infinite',
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.6)',
      },
      clipPath: {
        'green-triangle': 'polygon(0 75%, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
};