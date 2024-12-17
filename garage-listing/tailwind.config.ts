import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Domine", "serif"],
      },
      keyframes: {
        glow: {
          "0%, 80%": { opacity: "1" }, // Fully visible
          "50%": { opacity: "0" }, // Fully transparent
        },
      },
      animation: {
        glow: "glow 0.9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}) satisfies Config;
