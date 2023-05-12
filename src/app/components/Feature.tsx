import clsx from 'clsx'

type FeatureType = {
	variant: 'yellow' | 'yellow-dark' | 'purple' | 'gray' | string
	icon: React.ReactNode
	content: string
	className?: string
}

export function Feature({ variant, icon, content, className }: FeatureType) {
	return (
		<div className={clsx('flex items-center gap-3', className)}>
			<div
				className={clsx('h-8 w-8 rounded-full flex items-center justify-center text-gray-background', {
					'bg-yellow': variant === 'yellow',
					'bg-yellow-dark': variant === 'yellow-dark',
					'bg-purple': variant === 'purple',
					'bg-gray-text': variant === 'gray',
				})}
			>
				{icon}
			</div>
			<p>{content}</p>
		</div>
	)
}
