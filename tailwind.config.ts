import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "media"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "font-roboto",
    "font-poppins",
    "font-montserrat",
    "font-inter",
    "font-raleway",
    "font-lato",
    
    "font-dancing",
    "font-pacifico",
    "font-vibes",
    "font-sacramento",
    "font-lobster",
    "font-parisienne",
    "font-satisfy",
    "font-allura",
    "font-tangerine",
    "font-homemade",
    "font-courgette",
    "font-norican",
    "font-marck",
    "font-italianno",
    "font-delius",
    "font-bilbo",
    "font-arizonia"
  ],
  
  
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Moderne und gut lesbare Schrift
        poppins: ["Poppins", "sans-serif"], // Sehr beliebt für Webdesign
        montserrat: ["Montserrat", "sans-serif"], // Klare und professionelle Optik
        inter: ["Inter", "sans-serif"], // Perfekt für UI & modernes Design
        raleway: ["Raleway", "sans-serif"], // Elegante Schrift mit Charakter
        lato: ["Lato", "sans-serif"], // Weich und professionell
        
        dancing: ["Dancing Script", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        vibes: ["Great Vibes", "cursive"],
        sacramento: ["Sacramento", "cursive"],
        lobster: ["Lobster", "cursive"],
        parisienne: ["Parisienne", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        allura: ["Allura", "cursive"],
        tangerine: ["Tangerine", "cursive"],
        homemade: ["Homemade Apple", "cursive"],
        courgette: ["Courgette", "cursive"],
        norican: ["Norican", "cursive"],
        marck: ["Marck Script", "cursive"],
        italianno: ["Italianno", "cursive"],
        delius: ["Delius", "cursive"],
        bilbo: ["Bilbo Swash Caps", "cursive"],
        arizonia: ["Arizonia", "cursive"],
      },
      
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
       colors : {
        button: "#ff5722",
        icon: "#4f46e5",
        PRIMARY_BLACK: "#1d293b",
        SECONDARY_BLACK: "#3d495b",
        TERTIARY_BLACK: "#0a192f",
        bg_DARK: "#282A36",
        DARK_SLATE: "#0f172a",
        MIDNIGHT_BLACK: "#0b1120",
        PRIMARY_BLUE: "#0284c7",
        SECONDARY_BLUE: "#22d3ee",
        DARK_BLUE: "#172554",
        NAVY_BLUE: "#1e3a8a",
        DEEP_BLUE: "#0f172a",
        ROYAL_BLUE: "#312e81",
        STEEL_BLUE: "#1e293b",
        PRIMARY_ORANGE: "#ee8425",
        SECONDARY_ORANGE: "#fdba74",
        DEEP_ORANGE: "#b45309",
        PRIMARY_RED: "#dc2626",
        SECONDARY_RED: "#FF3D68",
        DARK_RED: "#7f1d1d",
        BLOOD_RED: "#991b1b",
        PRIMARY_GRAY: "#737373",
        SECONDARY_GRAY: "#a3a3a3",
        DARK_GRAY: "#d1d5db",
        CHARCOAL_GRAY: "#374151",
        GUNMETAL_GRAY: "#1f2937",
        SLATE_GRAY: "#334155",
        PRIMARY_GREEN: "#15803d",
        SECONDARY_GREEN: "#22c55e",
        FOREST_GREEN: "#065f46",
        DARK_OLIVE: "#1c4532",
        TEAL_GREEN: "#0f766e"
      },
      
    },
  },
  variants: {
    display: ["responsive", "print"], 
  },
  plugins: [tailwindcssAnimate],
};
