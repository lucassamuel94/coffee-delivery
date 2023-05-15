import { useCart } from '@/store/cart'
import { priceWithBRL } from '@/functions'

import { Button } from '@/components'

export function ConfirmationForm() {
	const { items, delivery } = useCart()

	const priceTotalItems = items.reduce((accumulator, obj) => accumulator + obj.totalPrice, 0)
	const priceTotalCart = priceTotalItems + delivery

	return (
		<>
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

			<Button variant='yellow' size='lg' className='w-full mt-6'>
				<span className='font-bold uppercase'>Confirmar Pedido </span>
			</Button>
		</>
	)
}
