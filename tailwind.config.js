/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            background: "#221d23",
            lightBackground: "#383338",
            lighterBackground: "#4e4a4e",
            foreground: "#f9f5f1",
            primary: "#7692ff",
            secondary: "#60a561",
            tertiary: "#e34a6f",
            tierS: "#ff7f7f",
            tierA: "#ffbf7f",
            tierB: "#ffdf7f",
            tierC: "#ffff7f",
            tierD: "#bfff7f",
        },
        fontFamily: {
            sans: ["Gotham", "system-ui", "sans-serif"],
            serif: ["Georgia", "serif"],
        },
        extend: {},
    },
    plugins: [],
}
