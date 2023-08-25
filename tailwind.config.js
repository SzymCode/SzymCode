/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      colors: {
        primary: {
          DEFAULT: '#0098c2',
          lightblue: '#e8f8fc',
          black: '#0a0a0a',
          darkest: '#0d0d0d',
          darker: '#141414',
          dark: '#212121',
          gray: '#5f6875',
          lightgray: '#f0f8fa',
          white: '#ffffff',

          linkedin: '#0072b1',
          facebook: '#3b5998',
          discord: '#5865F2'
        }
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
