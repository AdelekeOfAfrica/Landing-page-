/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkmode:false,
  theme: {
    extend: {
      colors:{
         'body':'#17171F',//'the background color of our page'//
         'selected-text':'#A3A3FF',
         'theme':'#3F3FFF',
         'nav':'#404053',
         'secondary':'#9191A4',
         'badge':'#3F3F51',
         'input-border':'#565666',
         'input':'#2A2A35'
      },
      fontFamily:{
        'poppins':["'Poppins'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

