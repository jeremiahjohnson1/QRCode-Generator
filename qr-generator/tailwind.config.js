/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This allows Tailwind to scan your JSX files
  ],
  theme: {
    extend: {
      fontSize : {
        '11xl': '11rem',
         '14x1': '14rem',
      },
    },
  },
  plugins: [],
};
