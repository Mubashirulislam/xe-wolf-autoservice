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
        'xe-black':   'var(--black)',
        'xe-white':   'var(--white)',
        'xe-red':     'var(--red)',
        'xe-red-lite':'var(--red-lite)',
        'xe-gray-1':  'var(--gray-1)',
        'xe-gray-2':  'var(--gray-2)',
        'xe-gray-4':  'var(--gray-4)',
        'xe-gray-5':  'var(--gray-5)',
        'xe-gray-6':  'var(--gray-6)',
        'xe-gray-7':  'var(--gray-7)',
        'xe-accent':  'var(--accent)',
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body:    ['var(--font-barlow)', 'sans-serif'],
        sans:    ['var(--font-barlow)', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(64px, 9vw, 124px)',
      },
      lineHeight: {
        'hero': '0.88',
      },
    },
  },
  plugins: [],
}
export default config
