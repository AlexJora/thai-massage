/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          80: "#FFF5F4",
          90: "#FFECEB",
          100: "#FFD8D6",
          200: "#FFB1AD",
          300: "#FF9E99",
          350: "#FF8B85",
          400: "#290200",
          500: "#f2cfcf",
          600: "#e5cece",
        },
        secondary: {
          100: "#FEFEFE",
          101: "#F5F5F5",
          200: "#CCCCCC",
          300: "#BFBFBF",
          400: "#ADADAD",
          500: "#999999",
          600: "#8F8F8F",
          700: "#525252",
          800: '#1877F2',
        },
      },
    },
  },
  plugins: [],
};
