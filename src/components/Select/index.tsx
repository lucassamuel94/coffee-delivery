import clsx from 'clsx'

type SelectType = {
	label: string
	icon: React.ReactNode
	isSelected: boolean
}

export function Select({ label, icon, isSelected = false }: SelectType) {
	return (
		<button
			className={clsx('inline-flex items-center justify-center gap-3 p-4 rounded-md transition-colors', {
				'bg-gray-button hover:bg-gray-hover hover:text-gray-subtitle': isSelected === false,
				'bg-purple-light border border-purple': isSelected,
			})}
		>
			{icon}
			<span className='uppercase'>{label}</span>
		</button>
	)
}
