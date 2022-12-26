/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "roboto": "'Roboto', sans-serif",
        "pt-sans": "'PT Sans', sans-serif",
        "viga": "'Viga', cursive"
      }
    },
  },
  plugins: [],
}
