/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust this if you have other file types
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
