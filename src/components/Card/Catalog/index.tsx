'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Counter } from '@/components/Counter'
import { CoffeeType } from '@/data/coffees'

import { priceWithoutBRL } from '@/functions'
import { Button } from '@/components/Button'
import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeItemCard } from '@/store/cart'
import { useCart } from '@/store/cart'

type CardCatalog = {
	coffee: CoffeeType
}

export function CardCatalog({ coffee }: CardCatalog) {
	const { add, items } = useCart()
	const [quantity, setQuantity] = useState(1)

	function onIncrement() {
		setQuantity((value) => value + 1)
	}

	function onDecrement() {
		quantity !== 1 && setQuantity((value) => value - 1)
	}

	function addCoffeeCart() {
		const newCoffeeCart = {
			...coffee,
			quantity: quantity,
		}

		add(newCoffeeCart)

		// console.log(items.findIndex((item) => item.id === coffee.id))
	}

	return (
		<div className='relative flex flex-col items-center px-5 pb-5 bg-gray-card pt-28 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] '>
			<Image
				src={`/coffees/${coffee.photo}.png`}
				alt={`Imagem do café ${coffee.name}`}
				width={120}
				height={120}
				className='absolute -translate-x-1/2 -top-8 left-1/2'
			/>

			<div>
				{coffee.tags.map((tag) => (
					<span
						key={tag}
						className='px-2 py-1 font-bold uppercase rounded-full text-xxs bg-yellow-light text-yellow-dark'
					>
						{tag}
					</span>
				))}
			</div>

			<>
				<h4 className='mt-4 font-bold font-title text-gray-subtitle text-title-sm '>{coffee.name}</h4>
				<p className='mt-2 text-sm text-gray-label'>{coffee.description}</p>
			</>

			<div className='flex items-center  justify-between w-full max-w-[208px] mt-8'>
				<p className='space-x-[2px]'>
					<span className='text-sm'>R$</span>

					<span className='font-extrabold font-title text-title-md'>{priceWithoutBRL(coffee.price)}</span>
				</p>

				<div className='inline-flex items-center gap-2'>
					<Counter quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />

					<Button variant='purple-dark' size='md' onClick={addCoffeeCart}>
						<ShoppingCart size={22} weight='fill' />
					</Button>
				</div>
			</div>
		</div>
	)
}
