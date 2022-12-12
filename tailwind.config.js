/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontWeight: {
      100: 100,
      300: 300,
      400: 400,
      500: 500,
      700: 700,
      900: 900,
    },
    colors: {
      gray: {
        900: "#303030",
        100: "#fff",
      },
      green: {
        900: "#1e3932",
        700: "#006241",
        300: "#00b388",
        100: "#d4e9e2",
      },
      red: {
        900: "#d50032",
      },
      gold: {
        900: "#cba258",
      },
    },
    extend: {},
  },
  plugins: [],
};
