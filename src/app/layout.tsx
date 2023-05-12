import { Header } from './components/Header'
import './globals.css'
import { baloo2, roboto } from '@/fonts'

export const metadata = {
	title: 'Coffee Delivery',
	description: 'Encontre o café perfeito para qualquer hora do dia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR'>
			<body
				className={`${roboto.variable} ${baloo2.variable} font-sans bg-gray-background text-gray-text leading-normal text-base min-h-screen`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
