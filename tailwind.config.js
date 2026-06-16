/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f2438',
        'dark-surface': '#152d45',
        'dark-card': '#1a3a5a',
        'dark-elevated': '#234a6e',
        accent: '#ffffff',
        'accent-muted': '#b8c9d9',
        gold: '#c9a227',
        'gold-light': '#e8c547',
        'gold-muted': '#a8861f',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.35)',
        gold: '0 0 40px rgba(201, 162, 39, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay':
          'linear-gradient(135deg, rgba(15, 36, 56, 0.92) 0%, rgba(26, 58, 90, 0.75) 50%, rgba(15, 36, 56, 0.88) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
