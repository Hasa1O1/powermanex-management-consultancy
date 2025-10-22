import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'var(--brand-red)',
          black: 'var(--brand-black)',
          white: 'var(--brand-white)',
          gray: 'var(--brand-gray)',
          blue: 'var(--brand-blue)',
          // Accessible variants
          'red-hover': 'var(--brand-red-hover)',
          'red-active': 'var(--brand-red-active)',
          'gray-light': 'var(--brand-gray-light)',
          'gray-dark': 'var(--brand-gray-dark)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sub': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        'section': '5rem', // 80px
        'section-lg': '7.5rem', // 120px
        'section-mobile': '3.5rem', // 56px
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'stagger': 'stagger 0.1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
