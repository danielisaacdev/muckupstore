/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#f2b90d",
				"background-light": "#f8f8f5",
				"background-dark": "#221e10",
			},
			fontFamily: {
				"display": ["'Noto Serif'", "serif"],
				"sans": ["'Noto Sans'", "sans-serif"]
			},
			borderRadius: {
				"DEFAULT": "0.125rem",
				"lg": "0.25rem",
				"xl": "0.5rem",
				"full": "0.75rem"
			},
		},
	},
	plugins: [],
}
