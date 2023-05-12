'use client'

import { Button, CardCart } from '@/components'
import { priceWithBRL } from '@/functions'
import { useCart } from '@/store/cart'

export function SelectedCoffees() {
	const { items, delivery } = useCart()

	const priceTotalItems = items.reduce((accumulator, obj) => accumulator + obj.totalPrice, 0)
	const priceTotalCart = priceTotalItems + delivery

	return (
		<div>
			<h2 className='font-bold font-title text-title-xs text-gray-subtitle'>Cafés selecionados</h2>

			<div className='mt-4 bg-gray-card rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] p-10'>
				<div>
					{items.map((item) => (
						<>
							<CardCart key={item.id} coffee={item} />
							<div className='h-[1px] bg-gray-button w-full my-4' />
						</>
					))}
				</div>

				<div className='flex flex-col gap-3 mt-6'>
					<div className='flex items-center justify-between text-sm'>
						<p>Total de itens</p>
						<span>{priceWithBRL(priceTotalItems)}</span>
					</div>

					<div className='flex items-center justify-between text-sm'>
						<p>Entrega</p>
						<span>{priceWithBRL(delivery)}</span>
					</div>

					<div className='flex items-center justify-between text-xl font-bold text-gray-subtitle'>
						<p>Total</p>
						<span>{priceWithBRL(priceTotalCart)}</span>
					</div>
				</div>

				<Button variant='yellow' size='lg' className='w-full mt-6' type='submit'>
					<span className='font-bold uppercase'>Confirmar Pedido </span>
				</Button>
			</div>
		</div>
	)
}
