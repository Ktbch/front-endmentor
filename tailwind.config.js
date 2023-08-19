/**= @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Lightred' : 'hsl(0, 100%, 67%)',
        'OrangeYellow': 'hsl(39, 100%, 56%)',
        'Greenteal': 'hsl(166, 100%, 37%)',
        'Cobaltblue': 'hsl(234, 85%, 45%)',
        'DarkGrayBlue': 'hsl(224, 30%, 27%)',
        'LightRed' : 'hsl(10, 100%, 67%)',
        'LightLavender': 'hsl(241, 100%, 89%)',
        'LightSlateBlue' :'hsl(252, 100%, 67%)',
        'LightRoyalBlue' : 'hsl(241, 81%, 54%)',
        'VioletBlue' : 'hsla(256, 72%, 46%, 1)',
        'PersianBlue': 'hsla(241, 72%, 46%, 0)',
      }
    },
  },
  plugins: [],
}

