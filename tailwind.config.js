/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c2d3ff',
          300: '#94b0ff',
          400: '#6184ff',
          500: '#3b5bff',
          600: '#2040f5',
          700: '#1a33e0',
          800: '#1929b5',
          900: '#1b268e',
          950: '#111660',
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 40px -10px rgba(59,91,255,0.18), 0 4px 16px -4px rgba(0,0,0,0.08)',
        'glow': '0 0 40px rgba(59,91,255,0.15)',
      },
    },
  },
  plugins: [],
}
