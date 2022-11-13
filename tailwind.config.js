/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'white':'#ffff',
      'purple':'#a02279',
      'light-purple':'#ffc089',
      'grey':'#a3a3a3',
      'light-grey':'#b8b8b8',
      'card-grey':'#d7d7d7',
      'black': '##434343',
      'footer-black':'#1d1d1e'

    },
    extend: {
      fontFamily:{
        Rose:['"Red Rose"', "cursive"]
      },
    },
  },
  plugins: [],
}
