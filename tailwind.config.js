/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 5s linear infinite'
			},
			colors: {
				black: '#323031',
				brown: '#9e6240',
				orange: '#ff6b35',
				red: '#cd4631',
				beige: '#f7c59f',
				eggshell: '#efefd0',
				babyblue: '#81adc8',
				lightblue: '#1a659e',
				darkblue: '#004e89'
			}
		}
	},
	plugins: []
}
