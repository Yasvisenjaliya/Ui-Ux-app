/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark:"#111827",
        dark_card:"#374151",
        header_color:"#3B82F6",
        nav:"#8cceee",
        back:"#b8e8f5"
      },
      textColor:{
        primary:"#ffffff",
        label:"#E2E8F0",
        inp:"#000000"
      },
      borderColor:{
        border:"#D1D5DB",
        dark_border:"#374151",
        focus:"#3B82F6"
      },
      ringColor:{
        ring:"#3B82F6"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
