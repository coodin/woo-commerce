import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Rajdhani"', "sans-serif"],
      open_sans: ["Open Sans", "sans-serif"],
    },
    boxShadow: { search: "0 1px 6px 0 rgba(32, 33, 36, .28)" },
    extend: {
      animation: {
        shake: "shake 5.33333s 0.1s infinite linear",
        feadeInDown: "feadeInDown 300ms ease-in-out 0s normal none 1 running",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "rotateZ(0deg) translate3d(0, 10%, 0)",
          },
          "100%": {
            transform:
              "rotateZ(360deg) translate3d(0, 10%, 0) rotateZ(-360deg)",
          },
        },
        feadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0,-100%,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0,0,0)",
          },
        },
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
export default config;
