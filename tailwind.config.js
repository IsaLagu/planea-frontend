/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
