/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Poppins, sans-serif",
        display: "Josefin Sans, sans-serif"
      }
    },
  },
  plugins: [],
}