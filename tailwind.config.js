/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "480px",
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
      54: "3.375rem",
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
      backdrop: "rgba(0,0,0,0.28)",
      gray: {
        900: "#212529",
        800: "#343a40",
        700: "#495057",
        600: "#868e96",
        500: "#adb5bd",
        400: "#ced4da",
        300: "#dee2e6",
        200: "#f1f3f5",
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
    boxShadow: {
      bottom: "0 3px 5px rgba(0,0,0,0.1)",
      none: "none",
    },
    extend: {
      inset: {
        "81px": "81px",
        "800px": "800px",
        "100%": "100%",
      },
      flexGrow: {
        2: 2,
      },
      spacing: {
        450: "28.125rem",
        600: "37.5rem",
        700: "43.75rem",
      },
      backgroundImage: {
        "home-sec1": "url('/src/asset/image/home/sec1.avif')",
        "home-sec2": "url('/src/asset/image/home/sec2.avif')",
        "home-sec3": "url('/src/asset/image/home/sec3.avif')",
        "home-sec4": "url('/src/asset/image/home/sec4.avif')",
        "home-sec5": "url('/src/asset/image/home/sec5.avif')",
        "home-sec6": "url('/src/asset/image/home/sec6.avif')",
      },
      transitionProperty: {
        height: "height",
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
