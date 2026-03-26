/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Based on DESIGN.md
        primary: {
          DEFAULT: '#9622aa',
          container: '#ec76fd',
        },
        surface: {
          DEFAULT: '#edf8ff',
          container: {
            low: '#e0f4ff',
            DEFAULT: '#edf8ff',
            highest: '#c8e1ee',
            lowest: '#ffffff',
          },
        },
        'on-surface': '#213138',
        'on-surface-variant': '#4e5e66',
        'outline-variant': '#9fb0b9',
        tertiary: {
          container: '#ff937e',
        },
        secondary: {
          container: '#ffbeee',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      boxShadow: {
        premium: '0 24px 48px -12px rgba(33, 49, 56, 0.06)',
      },
    },
  },
  plugins: [],
};
