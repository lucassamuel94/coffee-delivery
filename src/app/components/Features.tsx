'use client'
import { Feature } from './Feature'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Features() {
	const features = [
		{
			id: 1,
			content: 'Compra simples e segura',
			icon: <ShoppingCart weight='fill' />,
			variant: 'yellow-dark',
		},
		{
			id: 2,
			content: 'Embalagem mantém o café intacto',
			icon: <Package weight='fill' />,
			variant: 'gray',
		},
		{
			id: 3,
			content: 'Entrega rápida e rastreada',
			icon: <Timer weight='fill' />,
			variant: 'yellow',
		},
		{
			id: 4,
			content: 'O café chega fresquinho até você',
			icon: <Coffee weight='fill' />,
			variant: 'purple',
		},
	]

	return (
		<ul className='flex flex-wrap items-center mx-auto mt-16 max-w-screen md:grid md:grid-cols-2 gap-y-5 '>
			{features.map((feature) => (
				<Feature
					key={feature.id}
					variant={feature.variant}
					icon={feature.icon}
					content={feature.content}
					className='flex-col gap-2 mx-auto md:mx-0 md:flex-row'
				/>
			))}
		</ul>
	)
}
