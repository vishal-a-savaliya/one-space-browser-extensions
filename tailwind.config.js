/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  // purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#F9FAFC",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
