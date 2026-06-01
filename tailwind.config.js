/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tunex-black': '#0B0B0B',
        'tunex-dark': '#1A1A1A',
        'tunex-gold': '#D4AF37',
        'tunex-gold-light': '#F0D878',
        'tunex-gold-dark': '#B8960C',
        'tunex-gray': '#2A2A2A',
        'tunex-gray-light': '#3A3A3A',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F0D878 50%, #D4AF37 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
        'dark-gradient': 'linear-gradient(180deg, #0B0B0B 0%, #1A1A1A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.2)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'gold-xl': '0 0 60px rgba(212, 175, 55, 0.5)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
