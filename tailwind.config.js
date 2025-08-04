module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <- required if you're using /app directory
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    createThemes({
      default: {
        primary: hsl(170, 170, 170),
        secondary: hsl(170, 170, 0),
      },
      light: {
        primary: "#fff",
        secondary: hsl(170, 170, 0),
      },
      dark: {
        primary: "#333",
        secondary: hsl(170, 170, 0),
      },
    }),
  ],
  theme: {
    extend: {
      colors: {
        // Optional: define your colors as Tailwind variables
        "main-color-1": "#00ffc8",
        "main-color-2": "#0078ff",
      },
    },
  },
  plugins: [],
};
