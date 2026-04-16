/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dudley Core Brand Colors
        'dudley-navy': '#0D1B3E',
        'dudley-navy-light': '#162347',
        'dudley-navy-dark': '#08102A',
        'dudley-gold': '#C9A445',
        'dudley-gold-light': '#DDB95A',
        'dudley-gold-dark': '#A8852E',
        'dudley-cream': '#F9F5EF',
        'dudley-off-white': '#FAFAF8',
        // Product accent colors
        'mint-fresh': '#2D7D5A',
        'mint-light': '#4CAF7D',
        'mint-pale': '#E8F5EE',
        'mint-cool': '#1A5C42',
        'vitamin-amber': '#E8780A',
        'vitamin-warm': '#F59B1C',
        'vitamin-light': '#FFF3E0',
        'peppermint-teal': '#1A6B6B',
        'peppermint-light': '#2A9090',
        'peppermint-pale': '#E0F5F5',
        'sage-soft': '#5B7B6A',
        'sage-light': '#7A9F8C',
        'sage-pale': '#EDF4F0',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'dm': ['DM Serif Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
      },
      boxShadow: {
        'product': '0 25px 60px -10px rgba(0,0,0,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'cta': '0 8px 32px rgba(201,164,69,0.35)',
        'popup': '0 30px 80px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0D1B3E 0%, #162347 50%, #0D1B3E 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A445 0%, #DDB95A 50%, #A8852E 100%)',
        'gradient-mint': 'linear-gradient(135deg, #1A5C42 0%, #2D7D5A 50%, #1A5C42 100%)',
        'gradient-amber': 'linear-gradient(135deg, #E8780A 0%, #F59B1C 50%, #E8780A 100%)',
        'gradient-teal': 'linear-gradient(135deg, #1A6B6B 0%, #2A9090 50%, #1A6B6B 100%)',
        'gradient-sage': 'linear-gradient(135deg, #3D5C4A 0%, #5B7B6A 50%, #3D5C4A 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
