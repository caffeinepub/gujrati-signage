/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
        metallic: {
          DEFAULT: 'oklch(var(--metallic))',
          light: 'oklch(var(--metallic-light))',
          dark: 'oklch(var(--metallic-dark))',
        },
        golden: {
          DEFAULT: 'oklch(var(--golden))',
          light: 'oklch(var(--golden-light))',
          dark: 'oklch(var(--golden-dark))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 4px 8px -2px rgb(0 0 0 / 0.1)',
        'premium-sm': '0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'premium-lg':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 10px 20px -5px rgb(0 0 0 / 0.15), 0 0 40px -10px oklch(var(--metallic) / 0.1)',
        metallic: '0 2px 8px -2px oklch(var(--metallic) / 0.2), 0 4px 16px -4px oklch(var(--metallic) / 0.1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
