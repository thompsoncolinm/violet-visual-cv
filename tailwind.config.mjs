/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			h1: '3rem'
		},
		extend: {
			colors: {
				primary: '#FF6363',
				secondary: {
					100: '#E2E2D5',
					200: '#888883',
				},
			},
			fontFamily: {
				body: ['Nunito'],
				display: ['Roboto'],
			},
			fontSize: {
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',			
			},
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
		},
	},
	plugins: [],
}
