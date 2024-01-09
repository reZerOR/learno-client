/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "dot": 'url("/src/assets/dot.svg")',
        "group": "url('/src/assets/Group.svg')"
      },
      colors : {
        "backgroundprime": '#EFF0EA',
        "textPrime": '#1D2424',
        "prime": '#21857B',
        "secondPrime": '#C1F1EC',
        "textSecondery": "#4C5151"
      }
    },
  },
  plugins: [],
}

