/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Dancing:['"Dancing Script"','sans-serif'],
        VietnamPro:['"Be Vietnam Pro"','sans-serif']
      }
    },
  },
  plugins: [],
}