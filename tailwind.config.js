/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'left': 'left',
      }
    },
  },
  plugins: [],
}
