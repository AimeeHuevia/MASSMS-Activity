/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFE365",
          70: "#201339",
          90: "#49AAE7",
        },
      },
    },
    screens: {
      xs: { min: "280px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1025px", max: "1366px" },
      xl: { min: "1367px" },
    },
  },
  plugins: [],
};
