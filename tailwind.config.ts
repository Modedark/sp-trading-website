import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1F3D2B", // Deep Forest Green (Existing)
                secondary: "#1A1A1A", // Black (Logo Background)
                accent: "#3B2F2F", // Brown (Earth)
                highlight: "#800020", // Deep Burgundy (New Professional Red)
                background: "#F8F6F2", // Soft Off White
                "brand-black": "#121212",
                "brand-red": "#800020", // Updated to Burgundy
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                xl: "1rem",
            },
        },
    },
    plugins: [],
};
export default config;
