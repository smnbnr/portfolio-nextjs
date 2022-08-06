/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      PARAGRAPH: ["Josefin Slab", "serif"],
    },
    colors: {
      accentblue: "#157698",
      black: "#000",
      white: "#FFF",
      red: "#C1618E",
    },
  },
  plugins: [],
};
