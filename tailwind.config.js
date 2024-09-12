/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#C7AEAE',
      'secondary': '#3F545A',
      'accent': '#726996',
      'background': '#090606;',
      'gray': '#2A2A2A',
      'text': '#f1eaeb',
      'blur-blue': '#0022FF',
      'blur-light-blue': '#3DFFD2',
      'primary-darker': '#917d7d'
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Work Sans',
      body: 'Work Sans',
    },
  },
  plugins: [],
}