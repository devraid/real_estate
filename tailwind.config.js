/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/assets/**/*.{js,ts,jsx,tsx,mdx,css}'
  ],
  theme: {
    container: false,
		fontFamily: {
			body: ['avenir-next-book', 'sans-serif'],
			'avenir-next-book': ['avenir-next-book', 'sans-serif'],
			'avenir-next-condensed': ['avenir-next-condensed', 'sans-serif'],
			'avenir-next-heavy': ['avenir-next-heavy', 'sans-serif']
		},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
      colors: {
				green: {
					DEFAULT: 'var(--green)',
					7: 'var(--green-7)',
					6: 'var(--green-6)',
					5: 'var(--green-5)',
					4: 'var(--green-4)',
					3: 'var(--green-3)',
					2: 'var(--green-2)',
					1: 'var(--green-1)'
				},
				gray: {
					DEFAULT: 'var(--gray)',
					7: 'var(--gray-7)',
					6: 'var(--gray-6)',
					5: 'var(--gray-5)',
					4: 'var(--gray-4)',
					3: 'var(--gray-3)',
					2: 'var(--gray-2)',
					1: 'var(--gray-1)'
				},
			}
    },
  },
  plugins: [],
}
