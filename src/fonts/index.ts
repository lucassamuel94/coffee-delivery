import { Roboto, Baloo_2 } from 'next/font/google'

export const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	variable: '--font-roboto',
})

export const baloo2 = Baloo_2({
	subsets: ['latin'],
	display: 'swap',
	weight: ['700', '800'],
	variable: '--font-baloo2',
})
