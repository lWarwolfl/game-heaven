import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        //desktop sizes
        'desk-h1': [
          '32px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        'desk-h2': [
          '28px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-h3': [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-h4': [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-h5': [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-h6': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-title-lg': [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-title-md': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-title-sm': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-body-lg': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 400,
          },
        ],
        'desk-body-sm': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
        'desk-button-lg': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-button-sm': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-label': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'desk-input': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 400,
          },
        ],
        //mobile sizes
        'mob-h1': [
          '28px',
          {
            lineHeight: 'normal',
            fontWeight: 700,
          },
        ],
        'mob-h2': [
          '24px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-h3': [
          '20px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-h4': [
          '18px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-h5': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-h6': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-title-lg': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-title-md': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-title-sm': [
          '12px',
          {
            lineHeight: 'normal',
            fontWeight: 600,
          },
        ],
        'mob-body-lg': [
          '14px',
          {
            lineHeight: 'normal',
            fontWeight: 400,
          },
        ],
        'mob-body-sm': [
          '12px',
          {
            lineHeight: 'normal',
            fontWeight: 300,
          },
        ],
      },
      colors: {
        //start custom colors
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
        },
        gray: {
          50: 'hsl(var(--gray-50))',
          100: 'hsl(var(--gray-100))',
          200: 'hsl(var(--gray-200))',
          300: 'hsl(var(--gray-300))',
          400: 'hsl(var(--gray-400))',
          500: 'hsl(var(--gray-500))',
          600: 'hsl(var(--gray-600))',
          700: 'hsl(var(--gray-700))',
          800: 'hsl(var(--gray-800))',
          900: 'hsl(var(--gray-900))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
          dark: 'hsl(var(--success-dark))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
          dark: 'hsl(var(--error-dark))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
          dark: 'hsl(var(--warning-dark))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          light: 'hsl(var(--info-light))',
          dark: 'hsl(var(--info-dark))',
        },

        //end custom colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        50: 'var(--rounded-50)',
        100: 'var(--rounded-100)',
        150: 'var(--rounded-150)',
        200: 'var(--rounded-200)',
        250: 'var(--rounded-250)',
      },
      boxShadow: {
        soft: '0px -10px 40px 0px',
        normal: '0px 10px 60px 0px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
