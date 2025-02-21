import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        FONT_VIGA: ["Viga", "sans-serif"],
        FONT_MONTSERRAT: ["Montserrat", "sans-serif"],
        FONT_POPPINS: ["Poppins", "cursive"],
        FONT_RUBIK: ["Rubik Wet Paint", "sans-serif"],
        FONT_ANTON: ["ANTON", "sans-serif"],
        FONT_BUNGEE: ["Bungee Tint", "Bungee Tint"],
        FONT_MONOTON: ["Monoton", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        PRIMARY_BLACK: "#1d293b",
        SECONDARY_BLACK: "#3d495b",
        PRIMARY_WHITE: "#ffffff",
        SECONDARY_WHITE: "#f8f8f2",
        bg_DARK: "#282A36",
        bg_LIGHT: "#fcfcfc",
        PRIMARY_BLUE: "#0284c7",
        SECONDARY_BLUE: "#22d3ee",
        DARK_BLUE: "#172554",
        LIGHT_BLUE: "#eff6ff",
        PRIMARY_ORANGE: "#ee8425",
        SECONDARY_ORANGE: "#fdba74",
        PRIMARY_RED: "#dc2626",
        SECONDARY_RED: "#FF3D68",
        PRIMARY_GRAY: "#737373",
        SECONDARY_GRAY: "#a3a3a3",
        SECONDARY_GREEN: "#22c55e",
        PRIMARY_GREEN: "#15803d",
        LIGHT_GRAY: "#e5e7eb",
        DARK_GRAY: "#d1d5db",
        DARK_SLATE: "#0f172a",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  variants: {
    display: ["responsive", "print"], // فعال کردن print برای کلاس‌ها
  },
  plugins: [tailwindcssAnimate],
};
