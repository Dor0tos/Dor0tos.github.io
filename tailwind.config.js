/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        sine: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' }
        }
      },
      animation: {
        sine: 'sine 5s ease-in-out infinite'
      },
      boxShadow: {
        drt: 'inset 0 1px 3px rgb(100%, 100%, 100%, 16%)'
      },
      colors: {
        'drt-black-0': '#19161D',
        'drt-black-100': '#2A2931',
        'drt-black-200': '#585961'
      }
    }
  },
  plugins: []
}
