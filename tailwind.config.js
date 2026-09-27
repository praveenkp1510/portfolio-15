/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        comic: {
          bg: '#f8f4e6',
          panel: '#fff9e6',
          border: '#2d3748',
          accent: '#e53e3e',
          shadow: '#1a202c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        comic: ['Comic Neue', 'Patrick Hand', 'cursive'],
        comicTitle: ['Bangers', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'comic-bounce': 'comic-bounce 1s ease-in-out',
        'comic-pop': 'comic-pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'comic-wobble': 'comic-wobble 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'comic-bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '40%': {
            transform: 'translateY(-20px) rotate(-2deg)',
          },
          '60%': {
            transform: 'translateY(-10px) rotate(1deg)',
          },
        },
        'comic-pop': {
          '0%': {
            transform: 'scale(0) rotate(180deg)',
          },
          '50%': {
            transform: 'scale(1.2) rotate(10deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(0deg)',
          },
        },
        'comic-wobble': {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      boxShadow: {
        'comic': '6px 6px 0px #1a202c, 10px 10px 0px rgba(0,0,0,0.1)',
        'comic-hover': '10px 10px 0px #1a202c, 15px 15px 0px rgba(0,0,0,0.15)',
        'comic-dark': '6px 6px 0px #e53e3e, 10px 10px 0px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
