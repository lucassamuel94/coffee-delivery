'use client'

import { Minus, Plus } from '@phosphor-icons/react'
import clsx from 'clsx'

type CounterType = {
	size?: 'sm' | 'md'
	quantity: number
	onIncrement: () => void
	onDecrement: () => void
}

export function Counter({ size = 'md', quantity, onIncrement, onDecrement }: CounterType) {
	return (
		<div
			className={clsx('inline-flex items-center gap-1 p-2 rounded-md bg-gray-button', {
				'h-8': size === 'sm',
				'h-max': size === 'md',
			})}
		>
			<button onClick={onDecrement}>
				<Minus size='14' className='text-purple hover:text-purple-dark' />
			</button>
			<span className='w-5 text-center'>{quantity}</span>
			<button onClick={onIncrement}>
				<Plus size='14' className='text-purple hover:text-purple-dark' />
			</button>
		</div>
	)
}
