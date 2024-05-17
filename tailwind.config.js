/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'tmf-orange-1': '#F36923',
        'tmf-orange-2': '#FABD9E',
        'tmf-orange-3': '#FCDECF',
        'tmf-orange-4': '#FEEFE7',
        'tmf-purple': '#8D0099',
        'tmf-green-1': '#F6FEE7',
        'tmf-blue-1': '#E7F6FE',
        'tmf-blue-2': '#0DA6F2',
        'tmf-yellow-1': '#F6BD2B',
        'tmf-gray-1': '#1D1D1D',
        'tmf-gray-2': '#333333',
        'tmf-gray-3': '#666666',
        'tmf-gray-4': '#9F9F9F',
        'tmf-gray-5': '#D4D4D4',
        'tmf-gray-6': '#E9E9E9',
        'tmf-gray-7': '#F7F7F7'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      breakpoints: {
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px'
      }
    }
  },
  plugins: []
};
