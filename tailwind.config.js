/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F3D4',
        primary: '#00B8A9',
        secondary: '#F6416C',
        accent: '#FFDE7D',
        foreground: '#333333',
      },
    },
  },
  plugins: [],
}