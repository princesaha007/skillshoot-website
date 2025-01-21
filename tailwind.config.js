/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#245D51',

        'button-color'  : '#CB8461' ,

        'background-color-2' : '#F2E7DB',

        'orange-color' : ' #CB8461',

        'background-color-3' : '#F8F8F8'



      },

      fontSize: {
        'xxs': '0.5rem',
        'pxs' : '0.6rem',
        '3.5xl' : '32px',
         'lilsmall' : '17.5px',
         'pxs2' : '0.67rem',
         'pxs3' : '0.45rem',
         'pxs4' : '10px',
         'pxs5' : '0.7rem'
      },
      maxWidth: {
        'half': '400px',
        'box' : "220px",
        'box2' : "290px",
        'box3' : "400px",
        'box4' : '490px'

      },
      height: {
        'cart-height' : '420px',
        'banner-h' : '34rem', 
        'banner-h-2': '20rem'
      },
      width: {
        'cart-width' : '200px',
        'img-width' : '350px',
         'w2' : '650px'

      },

      lineHeight: {
        'custom': '1.7',
      },
      borderRadius: {
        'border' : '70rem 70rem 0px 0px'
      },
      inset: {
        'xx' : '35.33%',
        'xxx' : '42.00%'
      }
     



    },
  },
  plugins: [require('daisyui'),
  ],
}

