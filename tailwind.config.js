/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640em",
      md: "768em",
      lg: "1024em",
      xl: "1280em",
    },
    extend: {},
  },
  plugins: [],
};
