'use client'
import { Button } from '@/components/Button'
import { Counter } from '@/components/Counter'
import { priceWithBRL } from '@/functions'
import { CoffeeItemCard, useCart } from '@/store/cart'
import { Trash } from '@phosphor-icons/react'
import Image from 'next/image'

type CardCartType = {
	coffee: CoffeeItemCard
}

export function CardCart({ coffee }: CardCartType) {
	const { remove, changeQuantity } = useCart()

	function removeCoffeeCart() {
		remove(coffee)
	}

	function changeQuantityIncrement() {
		changeQuantity(coffee, 'increment')
	}

	function changeQuantityDecrement() {
		changeQuantity(coffee, 'decrement')
	}

	return (
		<div className='flex items-start justify-between w-full px-1 py-2'>
			<div className='flex items-center gap-5'>
				<Image src={`/coffees/${coffee.photo}.png`} alt={`Imagem do café ${coffee.name}`} width={64} height={64} />

				<div className='flex flex-col gap-2'>
					<p className='text-gray-subtitle'>{coffee.name}</p>

					<div className='inline-flex items-center gap-2'>
						<Counter
							size='sm'
							quantity={coffee.quantity}
							onIncrement={changeQuantityIncrement}
							onDecrement={changeQuantityDecrement}
						/>

						<Button variant='gray' size='sm' className='gap-1' onClick={removeCoffeeCart}>
							<Trash size={16} className='text-purple' />
							<span className='text-sm uppercase'>REMOVER</span>
						</Button>
					</div>
				</div>
			</div>

			<span className='font-bold'>{priceWithBRL(coffee.totalPrice)}</span>
		</div>
	)
}
