/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // todas as suas páginas/componentes
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      colors: {
        yellow: {
          500: "#FCD34D", // amarelo fixo do site
        },
      },
    },
  },
  plugins: [],
};
