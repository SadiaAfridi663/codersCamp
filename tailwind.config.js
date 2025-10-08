/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3baee9",
        "primary-light": "#e8f7ff",
        "primary-dark": "#2a9fd8",
      },
    },
  },
  plugins: [],
};
