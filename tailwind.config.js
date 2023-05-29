/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkmode:false,
  theme: {
    extend: {
     
        keyframes:{
          'fade-in-down':{
            "from":{
                transform: "translateY(-0.75rem)",
                opacity:"0"
            },
            "to":{
                transform: "translateY(0rem)",
                opacity:'1',
            },
          },
        },
        animation:{
          'fade-in-down':"fade-in-down 5.0s ease-in-out both",
          'animate-bounce':"fade-in-down 5.0 ease-in-out both"
          
        }
      ,
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

