/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // 主品牌色 - 深蓝
        brand: {
          50: "#e6ecf2",
          100: "#c0cee0",
          200: "#95aecb",
          300: "#6a8db5",
          400: "#4474a3",
          500: "#1f5c91",
          600: "#0f4275",
          700: "#0A2540", // 主深蓝
          800: "#081d33",
          900: "#061528",
        },
        // 强调色 - 活力橙
        accent: {
          50: "#fff4ef",
          100: "#ffe5d9",
          200: "#ffc7af",
          300: "#ffa985",
          400: "#ff8a5f",
          500: "#FF6B35", // 主橙色
          600: "#e85626",
          700: "#c0441d",
          800: "#99371a",
          900: "#732b14",
        },
        // 辅助色
        ink: {
          DEFAULT: "#1A1A2E",
          soft: "#4a4a5e",
          muted: "#8a8a9e",
        },
        cloud: {
          DEFAULT: "#F8F9FA",
          dark: "#eef0f3",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(10, 37, 64, 0.08)",
        card: "0 8px 30px rgba(10, 37, 64, 0.12)",
        glow: "0 0 40px rgba(255, 107, 53, 0.3)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A2540 0%, #0f4275 50%, #1f5c91 100%)",
        "accent-gradient": "linear-gradient(135deg, #FF6B35 0%, #ff8a5f 100%)",
        "mesh": "radial-gradient(at 20% 30%, rgba(31, 92, 145, 0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(255, 107, 53, 0.1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
