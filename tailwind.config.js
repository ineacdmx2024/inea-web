/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "tablet": "1210px",
        "arrow": "810px",
        "medida3" : "750px",
        "letras" : "400px",
        "ofertaEdu" : "500px",
        "mobileEdu" : "325px"

      },
      maxWidth: {
        "2xl2" : "75rem"
      },
      width: {
        "46": "750",
      },
      padding: {
        "88": "22rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
