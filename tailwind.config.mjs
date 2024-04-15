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
				'ecru': { DEFAULT: '#bfb48f', 100: '#2a2618', 200: '#544c30', 300: '#7e7249', 400: '#a69664', 500: '#bfb48f', 600: '#cbc2a4', 700: '#d8d1bb', 800: '#e5e0d2', 900: '#f2f0e8' },
				'wenge': { DEFAULT: '#564e58', 100: '#111012', 200: '#232024', 300: '#342f36', 400: '#463f47', 500: '#564e58', 600: '#7b6f7d', 700: '#9c929f', 800: '#bdb7bf', 900: '#dedbdf' },
				'cordovan': { DEFAULT: '#904e55', 100: '#1d1011', 200: '#3a1f22', 300: '#582f33', 400: '#753f44', 500: '#904e55', 600: '#af6a71', 700: '#c39095', 800: '#d7b5b8', 900: '#ebdadc' },
				'isabelline': { DEFAULT: '#f2efe9', 100: '#3c3423', 200: '#786746', 300: '#ac9871', 400: '#cfc3ad', 500: '#f2efe9', 600: '#f4f2ed', 700: '#f7f5f2', 800: '#faf8f6', 900: '#fcfcfb' },
				'eerie_black': { DEFAULT: '#252627', 100: '#070808', 200: '#0f0f10', 300: '#161718', 400: '#1e1f20', 500: '#252627', 600: '#4f5254', 700: '#797d81', 800: '#a6a8ab', 900: '#d2d4d5' }
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
