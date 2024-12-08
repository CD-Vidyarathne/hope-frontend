/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#293C5E",
        bgblue: "#D5DDEC",
        border: "#5882C1",
        dark: "#001845",
      },
    },
  },
  plugins: [],
};
