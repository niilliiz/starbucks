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
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
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
        900: "#212529",
        800: "#343a40",
        200: "#f1f3f5",
        100: "#f8f9fa",
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
