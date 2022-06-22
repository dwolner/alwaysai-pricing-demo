/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#F2303A"
      },
      maxWidth: {
        "8xl": "1440px"
      }
    },
  },
  plugins: [],
}
