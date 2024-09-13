/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B03D9",
        lightViolet: "#9623EF",
        lightPink: "#E6C7FF",
        grey: "#758CA3",
        darkGrey: "#525153",
        cream: "#F9F6F6",
      },
    },
    plugins: [],
  },
};
