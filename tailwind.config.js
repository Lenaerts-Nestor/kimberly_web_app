/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#FF8A50",
        "brand-pink": "#FF69B4",
        "brand-coral": "#FF6B9D",
      },
    },
  },
  plugins: [],
};
