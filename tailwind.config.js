module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      dolly: '#FEF08A',
      'granny-smith': '#AAD689',
      pine: '#65B68E',
      emerald: '#36928B',
      paradiso: '#2B6C79',
      bluewood: '#2F4858',
      'outer-space': '#2E3640',
      white: '#FFFFFF',
      slate: '#64748B',
      transparent: 'transparent',
    },
    letterSpacing: {
      tightest: '-0.075em',
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.2em',
    },
    extend: {
      fontSize: {
        '2xs': ['0.5rem', '0.75rem'],
        xs: ['0.75rem', '1.25rem'],
        base: ['1rem', '1.25rem'],
        xl: ['1.25rem', '1.5rem'],
      },
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '200% 0',
          },
        },
      },
      animation: {
        'move-bg': 'move-bg 4s infinite linear',
      },
    },
  },
};
