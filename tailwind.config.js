/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily:{
       Popines:['Poppins'],
        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

