/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			yellow: {
				DEFAULT: '#DBAC2C',
				light: '#F1E9C9',
				dark: '#C47F17',
			},
			purple: {
				DEFAULT: '#8047F8',
				light: '#EBE5F9',
				dark: '#4B2995',
			},
			gray: {
				title: '#272221',
				subtitle: '#403937',
				text: '#574F4D',
				label: '#8D8686',
				button: '#E6E5E5',
				hover: '#D7D5D5',
				input: '#EDEDED',
				card: '#F3F2F2',
				background: '#FAFAFA',
			},
			white: '#FFFFFF',
		},
		fontSize: {
			xxs: '10px',
			xs: '12px',
			sm: '14px',
			base: '16px',
			lg: '18px',
			xl: '20px',
			title: {
				xs: '18px',
				sm: '20px',
				md: '24',
				lg: '32px',
				xl: '48px',
			},
		},
		lineHeight: {
			normal: 1.3,
			large: 1.6,
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '24px',
					xl: 0,
				},
				screens: {
					xl: '1120px',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
