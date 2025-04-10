// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#E9E3D4',
        wine: '#8B0000',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
        italianno: ['Italianno', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },    
};
