/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0a0a0a',
                    100: '#171717',
                    200: '#262626',
                },
                primary: {
                    DEFAULT: '#3b82f6', // Blue
                    cyan: '#06b6d4',    // Cyan for gradients
                },
                accent: {
                    purple: '#8b5cf6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
