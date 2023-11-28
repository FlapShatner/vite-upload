/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0D0E0F",
        "bg-secondary":"#1A1A1A",
        "accent":"#13FC00",
        "btn-bg":"#000",        
        "btn-border": "#D9D9D9",
        "txt-primary":"#fff",
        "txt-secondary":"#A6A6A6",
        "border": "#D2D2D2",
        "divider":"#EAEAEA",
        "img-bg":"#EEEEEE",
        "icon": "#898989"
      }
    },
  },
  plugins: [],
  prefix: ''
}

