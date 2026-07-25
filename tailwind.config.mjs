/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-oswald)", "var(--font-poppins)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        oswald: ["var(--font-oswald)", "var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
        navy: {
          DEFAULT: "#01488a",
          dark: "#003366",
          light: "#f5f8fc",
        },
        amber: {
          DEFAULT: "#f5b800",
          dark: "#c78f00",
        },
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "appear-zoom": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear 0.5s ease-out forwards",
        "appear-zoom": "appear-zoom 0.5s ease-out forwards",
      },
    },
  },
};

export default tailwindConfig;
