/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlueIntro: "hsl(217, 28%, 15%)",
        darkBlueMain: "hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBlueTestimonials: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        '14': '14px',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
