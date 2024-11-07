module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1210px",
        arrow: "810px",
        medida3: "750px",
        letras: "390px",
        ofertaEdu: "500px",
        blog: "420px",
      },
      maxWidth: {
        "2xl2": "75rem",
      },
      width: {
        46: "750",
      },
      padding: {
        88: "22rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"], // Definimos Open Sans como la fuente sans-serif
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
