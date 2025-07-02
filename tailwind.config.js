/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,jsx,ts,tsx}',
        './features/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                typography: {
                    primary: '#020300',
                    secondary: '#757575',
                    tertiary: '#977726',
                },
                primary: {
                    DEFAULT: '#FFBA08',
                    light: '#FFF0C9',
                },
                background: {
                    yellow: '#FFE7AB',
                    section: '#F3F3F3',
                    white: '#FFFFFF',
                },
                success: {
                    DEFAULT: '#82CC6A',
                    dark: '#416635',
                },
                error: {
                    DEFAULT: '#EF6161',
                    dark: '#8A3838',
                },
                warning: {
                    DEFAULT: '#F29D55',
                    dark: '#8C5B31',
                },
            },
            boxShadow: {
                nav: '0 0 10px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
