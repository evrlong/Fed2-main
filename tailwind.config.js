/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Legg til spesifik filsti hvis den er i roten
    "./src/**/*.{html,js}", // Hvis HTML/JS er i src-mappen
    "!./node_modules/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
