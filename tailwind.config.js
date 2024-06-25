/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
            boxShadow: '0px 0px 14px 0px rgba(181,6,6,1)',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1',
            boxShadow: '0px 0px 14px 0px rgba(181,6,6,1)',
          },
        },
      },
      animation: {
        pulse: 'pulse 1s infinite',
      },
    },
  },
  plugins: [],
}
