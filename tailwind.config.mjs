/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '375px',
			
			'xs_only': {'min': '375px', 'max': '575px'},

			'sm': '576px',

			'sm_only': {'min': '576px', 'max': '959px'},
	  
			'md': '960px',
	  
			'md_only': {'min': '960px', 'max': '1439px'},

			'lg': '1440px',
			
			'lg_only': {'min': '1440px', 'max': '1536px'},
	  
			'xl': '1536px',
		},
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
				body: ['Roboto'],
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
