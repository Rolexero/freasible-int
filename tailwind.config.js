/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        extend: {
            backgroundImage: {
                Image: "url('/src/asset/bg-football.2d1b7b03.jpg')",
                logoImage: "url('/src/asset/logo.efdde25b.png')",
            },
            colors: {
                brightDark: "#14161a",
                darkBlue: "#347abe",
                yellowColor: "#eb9749",
            },
        },
    },
    plugins: [],
};