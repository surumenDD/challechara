/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0a',
        'cyber-darker': '#1a1a1a',
        'cyber-light': '#ffffff',
        'cyber-gray': '#888888',
        'cyber-blue': '#00ffff',
        'cyber-pink': '#ff0080',
        'cyber-green': '#00ff80',
        'cyber-orange': '#ff8000',
        'cyber-purple': '#8000ff',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px #00ffff',
        'neon-pink': '0 0 20px #ff0080',
        'neon-green': '0 0 20px #00ff80',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff' },
          '100%': { boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
      },
    },
  },
  plugins: [],
};