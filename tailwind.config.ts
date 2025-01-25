import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        mainOlive: "#4E6146",
        ligthOlive: '#868A79',
        cream: '#DCBFBB',
        lightBlack: '#3a3a3a'
      },
      fontFamily: {
        Pacifico: ['Pacifico', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite ',
      }
    },
  },
  plugins: [],
} satisfies Config;
