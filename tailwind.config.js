/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
        blackish: "#323130",
        greenish: "#dff4ce",
        pinkish: "#fff1d8",
        blueish: "#f5f6f7",
      },
    },
  },
  plugins: [],
};
