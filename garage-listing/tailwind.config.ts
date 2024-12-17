import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Domine", "serif"],
      },
    },
  },
  plugins: [],
}) satisfies Config;
