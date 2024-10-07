/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ast-global-color-0': '#2fcbef',// sky blue
        'ast-global-color-1': '#9a99ff',//purple
        'ast-global-color-3': '#e6db74',//yellow
      },

    },
  },
  plugins: [],
}

