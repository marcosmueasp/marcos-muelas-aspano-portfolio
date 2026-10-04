/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html', './js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', 'Cascadia Code', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace']
      },
      colors: {
        paper: '#f4f1e8'
      }
    }
  },
  plugins: []
};
