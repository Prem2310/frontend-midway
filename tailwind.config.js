/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            ibm: ['"IBM Plex Sans"', "sans-serif"],
            inconsolata: ["Inconsolata", "monospace"],
        },
        extend: {},
    },
    plugins: [],
};
