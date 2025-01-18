/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lblue: "#BACAF2",
        dblue: "#293C5E",
        wblue: "#EFF4FF",
      },
    },
  },
  plugins: [],
};
