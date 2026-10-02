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
        phosphor: {
          DEFAULT: '#33ff66',
          dim: '#1a9e44',
          bg: '#0a0f0a'
        },
        paper: '#f4f1e8'
      }
    }
  },
  plugins: []
};
