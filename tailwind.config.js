/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                acrylis: {
                    DEFAULT: "#7A4FA3",
                    deep: "#5A2D82",
                    accent: "#F2A7D8",
                    lilac: "#CFA3E5",
                    glass: "#F4EAF8",
                    light: "#EDE0F5",
                    // New status colors
                    safe: "#9CBF94",
                    "safe-deep": "#4A6741",
                    "safe-light": "#ECF3EB",
                    unsafe: "#D68D7D",
                    "unsafe-deep": "#8C4A3E",
                    "unsafe-light": "#F9ECEA",
                    warning: "#E9C46A",
                    "warning-deep": "#856404",
                    "warning-light": "#FEF9EC",
                    mist: "#fcfcfcff",
                },
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            typography: ({ theme }) => ({
                acrylis: {
                    css: {
                        "--tw-prose-headings": theme("colors.acrylis.deep"),
                        "h1, h2, h3, h4": {
                            color: theme("colors.acrylis.deep"),
                            fontWeight: "700",
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
