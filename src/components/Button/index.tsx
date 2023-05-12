import clsx from 'clsx'

type ButtonType = {
	children: React.ReactNode
	className?: string
	variant: 'yellow' | 'yellow-light' | 'purple-dark' | 'gray'
	size: 'sm' | 'md' | 'lg'
}

export function Button({ children, variant = 'gray', size = 'md', className = '' }: ButtonType) {
	return (
		<button
			className={clsx(
				'flex items-center justify-center rounded-md px-2',
				{
					'bg-yellow hover:bg-yellow-dark text-white': variant === 'yellow',
					'bg-yellow-light hover:bg-yellow/30 text-yellow-dark': variant === 'yellow-light',
					'bg-purple-dark hover:bg-purple text-white': variant === 'purple-dark',
					'bg-gray-button hover:bg-gray-hover text-gray-text': variant === 'gray',
				},
				{
					'h-8': size === 'sm',
					'h-[38px]': size === 'md',
					'h-[46px]': size === 'lg',
				},
				className
			)}
		>
			{children}
		</button>
	)
}
