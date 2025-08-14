/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'

export default {
  darkMode: false,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
}

