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
        'dark-bg': '#1a3a5a',
        'dark-surface': '#1e4a6e',
        'dark-card': '#2a5a7a',
        'accent': '#ffffff',
        'accent-muted': '#cccccc',
      },
    },
  },
  plugins: [],
}
