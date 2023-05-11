/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-orange": "#E17654",
        orange: "#FF8C38",
        dark: "#252525",
        "blue-green": "#115E59",
        cream: "#FFEAD0",
        "light-cream": "#FFF7ED",
        "mid-cream": "#FFCC8D",
        "red-amber": "#E17654",
      },
    },
  },
  plugins: [],
};
