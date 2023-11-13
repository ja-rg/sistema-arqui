/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {

    },
    colors: {
      'bubble-gum': '#ff77e9',
      'midnight': '#121063',

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

