/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2B283A',
                secondary: '#F5F5F5',
                accent: '#5035FF',
                neutral: '#1F1820',
                'base-100': '#474748',
                info: '#4A4E74',
                success: '#59E391',
                warning: '#DEB617',
                error: '#F07587',
            },
            boxShadow: {
                below: '0px 2px 2px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [require('daisyui')],
};
