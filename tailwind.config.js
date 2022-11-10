/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "sans-serif"],
      },
      colors: {
        "Dark-cyan": "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        "Dark-blue": "hsl(212, 21%, 14%)",
        "Grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
