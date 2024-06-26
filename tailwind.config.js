/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "300px",
      xxs: "350px",
      xs: "390px",
      ss: "475px",
      sm: "640px",
      smx: "700px",
      md: "768px",
      xlg: "840px",
      lg: "1024px",
      lgx: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}

