/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#F9BFC5",
        secondary: "#FDF2F0",
        tertiary: "#F1F1F1"

      },
      width: {
        "97.5": "97.5%",
        "90": "90%",
        "112": "28rem"
      },
      height: {
        "88": "22rem",
      },
      borderWidth: {
        "1": "1px"
      },
      borderImage: {
        "three": "url(https://1000logos.net/wp-content/uploads/2021/09/Three-UK-logo.png)"
      },
      fontSize: {
        "16xl": "16rem",
        "20xl": "20rem"
      },
      margin:{
        "19": "9.5rem",
        "24": "12rem",
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

