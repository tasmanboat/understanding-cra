module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palebrown': '#ebe1e1',
      }
    },
  },
  plugins: [require("daisyui")],
}
