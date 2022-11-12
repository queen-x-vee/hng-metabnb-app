/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'white':'#fffff',
      'purple':'#a02279',
      'light-purple':'#ffc089',
      'grey':'#a3a3a3',
      'light-grey':'#b8b8b8',
      'black': '##434343'
    },
    extend: {
      fontFamily:{
        Rose:['"Red Rose"', "cursive"]
      },
    },
  },
  plugins: [],
}
