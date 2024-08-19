/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "15rem", // Ajustez la taille en fonction de vos besoins
      },
    },
  },
  plugins: [],
};
