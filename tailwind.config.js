const { } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // Violet 600
        secondary: '#F59E42', // Orange 400
        success: '#10B981', // Emerald 500
        warning: '#FBBF24', // Amber 400
        error: '#EF4444', // Red 500
        background: '#F3F4F6', // Gray 100
        surface: {
          light: '#F3F4F6', // Gray 100
          dark: '#1F2937', // Gray 800
        },
        text: {
          light: '#111827', // Gray 900
          dark: '#F9FAFB', // Gray 50
        },
        // Gradients can be used with from- and to- utilities
        // Example: bg-gradient-to-r from-primary to-blue-500
      },
      fontFamily: {
        sans: ['Inter Variable', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
};