/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    apple: "#F5F5F7",
                },
            },
            fontFamily: {
                sfdisplay: ['"SF Display"', "arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
