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
        "BG_COLOR": "#100028",
        "THEME_PINK": "#b3014f",
        "THEME_BLUE": "#3919bb",
        "BG_NAVBAR": "#1a083d",
        "BG_FOOTER": "#510023",
      }
    },
  },
  plugins: [],
};