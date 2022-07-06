module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {},
		fontFamily: {
			inter: ['inter', 'sans-serif'],
			poppins: ['poppins', 'serif'],
			'space-mono': ['space-mono']
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	// daisyUI config (optional)
	daisyui: {
		themes: [
			{
				rosepine: {
				}
			}
		]
	}
};
