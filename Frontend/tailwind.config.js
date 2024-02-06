/** @type {import('tailwindcss').Config} */
export default {
  darkMode: '',
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        color1: "#D7573B",
        color2: "#FA9C0F",
        color3: "#152F37",
        color4: "#35528B",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
