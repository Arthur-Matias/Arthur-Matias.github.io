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
        display: "Josefin Sans, sans-serif",
        title: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}