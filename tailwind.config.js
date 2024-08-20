module.exports = {
  content: [
    "./*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins font
      },
      colors: {
        primaryColor: 'rgba(231, 111, 81, 1)', // Adding custom color
        primaryBgColor: 'rgba(231, 111, 81, 0.1)',//Adding custom bg-color
      },
    },
  },
  plugins: [require('daisyui')],
}
