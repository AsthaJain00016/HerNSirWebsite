/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fdf2f4', 100: '#fce7eb', 200: '#f9d0d9', 300: '#f4a8b9',
          400: '#ec7691', 500: '#e04a73', 600: '#c93160', 700: '#a92350',
          800: '#7d1c3f', 900: '#4f1228',
        },
        gold: {
          50: '#fbf7ed', 100: '#f6ecd0', 200: '#ecd9a0', 300: '#e0bf66',
          400: '#d4a83f', 500: '#c08f2a', 600: '#a3731f', 700: '#7e5818',
          800: '#5a3f12', 900: '#3a280c',
        },
        cream: {
          50: '#fffdf9', 100: '#fdf8f0', 200: '#faf0e0', 300: '#f5e4c8',
          400: '#ecd3a8', 500: '#dfbd83',
        },
      },
      borderRadius: { 'xl2': '20px' },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(169, 35, 80, 0.15)',
        'glow': '0 0 30px rgba(212, 168, 63, 0.35)',
        'card': '0 20px 50px -20px rgba(125, 28, 63, 0.25)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
