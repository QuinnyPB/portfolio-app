// import { createThemes } from "tw-colors"; // or your theme plugin

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}", // ensure root-level files are included
  ],
  theme: {
    extend: {
      colors: {
        "main-color-1": "#00ffc8",
        "main-color-2": "#0078ff",
      },
      screens: {
        xs: "406px",
        xxs: "276px",
      },
    },
  },
  plugins: [
    createThemes({
      default: {
        primary: "hsl(170, 100%, 50%)",
        secondary: "hsl(170, 100%, 30%)",
      },
      light: {
        primary: "#fff",
        secondary: "hsl(170, 100%, 30%)",
      },
      dark: {
        primary: "#333",
        secondary: "hsl(170, 100%, 30%)",
      },
    }),
  ],
};
