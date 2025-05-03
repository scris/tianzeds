/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.3: '0.075rem',
        128: '32rem',
        192: '48rem',
        256: '64rem',
        324: '81rem',
      },
      width: {},
    },
  },
  corePlugins: {
    preflight: false,
  },
}
