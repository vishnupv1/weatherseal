/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B72727", // Red color for primary
        secondary: "#000000", // Black color for secondary
      },
    },
  },
  plugins: [],
};
