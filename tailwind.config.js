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
      'card-black': '#434343',
      'black': '##434343',
      'footer-black':'#1d1d1e',
      'footer-white':'#f1f3f9',
      'modal-grey':'#cfd8dc',
      'modal-bg':'#f8f9fa',
      'nav-input':'#b4b4b4',
      'input-placeholder':'#333333'

    },
    extend: {
      fontFamily:{
        Rose:['"Red Rose"', "cursive"]
      },
    },
  },
  plugins: [],
}
