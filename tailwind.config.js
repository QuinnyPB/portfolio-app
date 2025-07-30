module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // <- required if you're using /app directory
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
