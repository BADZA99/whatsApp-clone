/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red_1:"red",
        dark_bg_1:"#111B21",
      }
    },
  },
  plugins: [],
};
