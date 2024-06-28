module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#1DA1F2',
          800: '#0D8CDC',
        },
      },
    },
  },
  plugins: [],
};
