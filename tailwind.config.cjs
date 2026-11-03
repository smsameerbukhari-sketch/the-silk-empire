module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        empire: {
          black: '#0a0a0c',
          card: '#121216',
          glass: 'rgba(18, 18, 22, 0.75)',
          gold: '#BF953F',
          lightGold: '#FCF6BA',
          darkGold: '#AA771C',
          accent: '#B38728'
        }
      },
      boxShadow: {
        goldGlow: '0 0 25px rgba(191, 149, 63, 0.25)',
        innerGold: 'inset 0 0 15px rgba(191, 149, 63, 0.15)'
      }
    }
  },
  safelist: [
    'border-amber-500',
    'text-amber-400',
    'border-blue-500',
    'text-blue-400',
    'border-purple-500',
    'text-purple-400',
    'border-emerald-500',
    'text-emerald-400',
    'border-rose-500',
    'text-rose-400',
    'border-gray-500',
    'text-gray-300'
  ],
  plugins: []
};
