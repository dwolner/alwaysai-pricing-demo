/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#F2303A",
        "purple": "#4924E2",
        "violet": "#231D4F"
      },
      maxWidth: {
        "2xs": "230px",
        "8xl": "1440px"
      }
    },
  },
  plugins: [],
}
