/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.{html,js}'],
    theme: {
        extend: {},
        colors: {
            blue: '#2A4DD0',
            green: '#4CA154',
            dark: '#111729',
            dark_light: '#223344',
            gray: '#909193',
            gray_light: '#F2F9FE',
            white: '#FFFFFF',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
    },
    plugins: [],
}
