/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
     minWidth: {
      '48': '12rem', // You can adjust the width as needed
    },
    },
  },
  plugins: [],
}
