import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ['"Space Grotesk"', "Inter", "system-ui"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-pink": "var(--gradient-pink)",
        "gradient-aurora": "var(--gradient-aurora)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        soft: "var(--shadow-soft)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "float-slow": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "pulse-glow": { "0%,100%": { boxShadow: "0 0 0 0 hsl(327 100% 58% / 0.45)" }, "50%": { boxShadow: "0 0 30px 10px hsl(327 100% 58% / 0)" } },
        "modal-in": {
          "0%": { opacity: "0", transform: "translate(-50%, -46%) scale(0.94)", filter: "blur(8px)" },
          "60%": { opacity: "1", filter: "blur(0)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)", filter: "blur(0)" },
        },
        "modal-out": {
          "0%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)", filter: "blur(0)" },
          "100%": { opacity: "0", transform: "translate(-50%, -52%) scale(0.96)", filter: "blur(6px)" },
        },
        "overlay-in": {
          "0%": { opacity: "0", backdropFilter: "blur(0px)" },
          "100%": { opacity: "1", backdropFilter: "blur(8px)" },
        },
        "overlay-out": {
          "0%": { opacity: "1", backdropFilter: "blur(8px)" },
          "100%": { opacity: "0", backdropFilter: "blur(0px)" },
        },
        "shimmer-reveal": {
          "0%": { transform: "translateX(-120%) skewX(-12deg)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateX(220%) skewX(-12deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.25s ease-out",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "modal-in": "modal-in 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        "modal-out": "modal-out 0.25s cubic-bezier(0.4, 0, 1, 1)",
        "overlay-in": "overlay-in 0.35s ease-out forwards",
        "overlay-out": "overlay-out 0.25s ease-in forwards",
        "shimmer-reveal": "shimmer-reveal 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
