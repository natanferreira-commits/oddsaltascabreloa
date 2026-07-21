import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0512",
          purple: "#7C3AED",
          purpleLight: "#A78BFA",
          gold: "#F5C542",
          lime: "#C0FF00",
          limeSoft: "#84CC16"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Anton'", "Impact", "sans-serif"]
      },
      boxShadow: {
        cta: "0 0 0 1px rgba(192,255,0,0.5), 0 0 40px -8px rgba(192,255,0,0.7)"
      }
    }
  },
  plugins: []
};

export default config;
