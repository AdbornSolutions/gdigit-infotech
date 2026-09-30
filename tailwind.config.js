/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1C77C3',
          cyan: '#06B6D4',
          indigo: '#4F46E5',
          teal: '#5BC0BE',
          bg: '#F7F9FC',
          border: '#D9D9D9',
          slate: '#3A506B',
          text: '#475569',
          orange: '#F97316',
          'orange-hover': '#FB923C',
          dark: '#1E1E1E',
          'dark-2': '#3B3B3B',
          light: '#EFF1F3',
          gray: '#4B5563',
        },
      },
      fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
};
