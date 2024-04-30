/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "younes" : "url('/yunes.png')"
    },
    animation: {
      "appear" : "appearKey linear 0.25s"
    },
    keyframes : {
      "appearKey" : {
        '0%': {'opacity': 0 },
        '100%': { 'opacity': 0.95  },
      }
    },
    extend: {},
  },
  plugins: [],
}

