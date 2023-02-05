/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '*.html',
        './src/*.{html,js}',
        './dist/*.{js}',
        './assets/**/*.{css,js}',
        './examples/*.{html}',
    ],
    theme: {
        fontFamily: {
            lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
            sans: ['ui-sans-serif', 'system-ui'],
            display: ['Oswald'],
            body: ['"Lato"'],
        },
        container: {
            center: true,
        },
        extend: {
            padding: '2rem'[('hover', 'focus')],
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            6: '6px',
            8: '8px',
        },
    },
    plugins: [],
    darkMode: 'media',
}
