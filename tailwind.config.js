/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                ui: ['JetBrains Mono', 'monospace']
            },
            colors: {
                accent: {
                    DEFAULT: "#3B82F6",
                    foreground: "#ffffff"
                },
                background: {
                    light: "#ffffff",
                    dark: "#101010"
                },
                foreground: {
                    light: "#111827",
                    dark: "#f5f5f5"
                },
                muted: {
                    light: "#6B7280",
                    dark: "#9CA3AF"
                },
                card: {
                    light: "#ffffff",
                    dark: "#2c2c2c"
                },
                border: {
                    light: "#e5e7eb",
                    dark: "#3a3a3a"
                }
            },
            backgroundImage: {
                'gradient-light': 'linear-gradient(135deg, #ffffff, #f9f9f9)',
                'gradient-dark': 'linear-gradient(135deg, #2c2c2c, #1f1f1f)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
};

module.exports = config;
