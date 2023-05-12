'use client'
import { useCart } from '@/store/cart'

import { clsx } from 'clsx'
import { Button } from '../Button'
import { ShoppingCart } from '@phosphor-icons/react'

export function ButtonCart() {
	const { items } = useCart()
	const totalItems = items.length

	return (
		<Button variant='yellow-light' size='md' className='relative'>
			<ShoppingCart size={22} weight='fill' />
			<div
				className={clsx(
					'w-5 h-5 text-xs font-bold flex items-center justify-center text-white rounded-full bg-yellow-dark absolute -right-[10px] -top-[10px]',
					{
						block: totalItems > 0,
						hidden: totalItems <= 0,
					}
				)}
			>
				{totalItems}
			</div>
		</Button>
	)
}
