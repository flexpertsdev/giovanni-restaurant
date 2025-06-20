import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        giovanni: {
          blue: {
            DEFAULT: '#1a4d7a',
            light: '#2a6da0',
            dark: '#0a3d6a'
          },
          terracotta: {
            DEFAULT: '#d85c3a',
            light: '#e87c5a',
            dark: '#b84c2a'
          },
          amber: {
            DEFAULT: '#f4a261',
            light: '#f6b281',
            dark: '#e29251'
          },
          cream: '#faf8f3',
          charcoal: '#2a2a2a'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;