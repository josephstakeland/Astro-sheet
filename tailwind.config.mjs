/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'shamrock': {
					'50': '#effef8',
					'100': '#d9fff0',
					'200': '#b5fde0',
					'300': '#7cf9c9',
					'400': '#20e99c',
					'500': '#13d48b',
					'600': '#09b071',
					'700': '#0b8a5a',
					'800': '#0f6c49',
					'900': '#0e593f',
					'950': '#013221',
				},
				
			}
		},
	},
	plugins: [],
}
