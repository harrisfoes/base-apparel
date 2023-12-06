/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "des-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",
      "neutral-grey": "hsl(0, 6%, 24%)",
      "f-1": "hsl(0, 0%, 100%)",
      "t-1": "hsl(0, 100%, 98%)",
      "f-2": "hsl(0, 80%, 86%)",
      "t-2": "hsl(0, 74%, 74%)",
    },
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      dropShadow: {
        softored: ["0 25px 25px hsla(0, 93%, 68%, 0.25)"],
      },
    },
  },
  plugins: [],
};

/*

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Desaturated Red: hsl(0, 36%, 70%)
- Soft Red: hsl(0, 93%, 68%)

### Neutral

- Dark Grayish Red: hsl(0, 6%, 24%)

### Gradients

- Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
- Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 300, 400, 600
 */
