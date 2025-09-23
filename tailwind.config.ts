import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      colors: {
        // === SURFACE COLORS ===
        background: "#FFFFFF",
        foreground: "#000000",

        // === SURFACE VARIANTS ===
        surface: {
          DEFAULT: "#FFFFFF",
          primary: "#FFFFFF",
          invert: "#000000",
        },

        // === TEXT COLORS ===
        text: {
          primary: "#000000",
          secondary: "#757575", // Based on UI pattern
          invert: "#FFFFFF",
        },

        // === BRAND COLORS ===
        brand: {
          green: "#285E67", // Updated brand green
          peach: "#FFCBA4",
          "light-peach": "#FFF2E8",
        },
        "brand-green": "#285E67",

        // === TEDx COLORS ===
        tedx: {
          red: "#e62b1e",
          black: "#010101",
          white: "#ffffff",
          gray: "#f5f5f5",
        },

        // === PRIMARY SYSTEM ===
        primary: {
          DEFAULT: "#285E67", // Brand green
          foreground: "#000000",
        },

        // === SECONDARY SYSTEM ===
        secondary: {
          DEFAULT: "#F7F7F7", // Gray 10
          foreground: "#000000",
        },

        // === ACCENT COLORS ===
        accent: {
          DEFAULT: "#FFCBA4", // Brand peach
          foreground: "#000000",
        },
        // === Green COLORS ===
        green: {
          DEFAULT: "#285E67", // Brand green
          foreground: "#000000",
        },
        // === GRAY SCALE (From your design system) ===
        gray: {
          10: "#F7F7F7",
          20: "#EEEEEE",
          40: "#CCCCCC",
          90: "#1A1A1A",
        },

        // === CARDS & SURFACES ===
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },

        // === UI ELEMENTS ===
        muted: {
          DEFAULT: "#F7F7F7",
          foreground: "#757575",
        },
        border: "#EEEEEE",
        input: "#F7F7F7",
        ring: "#285E67",

        // === STATE COLORS ===
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#285E67",
          foreground: "#000000",
        },
        warning: {
          DEFAULT: "#FFCBA4",
          foreground: "#000000",
        },

        // === CHART COLORS ===
        chart: {
          1: "#285E67",
          2: "#FFCBA4",
          3: "#1A1A1A",
          4: "#CCCCCC",
          5: "#F7F7F7",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "tedx-gradient": "linear-gradient(135deg, #e62b1e 0%, #ff4757 100%)",
        "hero-pattern": "url('/src/assets/images/hero-bg.jpg')",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        tedx: "0 10px 25px rgba(230, 43, 30, 0.2)",
        "tedx-lg": "0 20px 40px rgba(230, 43, 30, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
        "tedx-fade-in": "fadeIn 0.6s ease-in-out",
        "tedx-slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
