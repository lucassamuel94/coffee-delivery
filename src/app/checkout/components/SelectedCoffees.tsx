'use client'

import { useCart } from '@/store/cart'

import { CardCart } from '@/components'
import { ConfirmationForm } from './ConfirmationForm'

export function SelectedCoffees() {
	const { items } = useCart()

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

				<ConfirmationForm />
			</div>
		</div>
	)
}
