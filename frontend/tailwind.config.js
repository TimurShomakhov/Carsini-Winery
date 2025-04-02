// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}', // important for Vite + JSX
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#E9E3D4',
        wine: '#8B0000', // or whatever deep red tone you’re using
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
