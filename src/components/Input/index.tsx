/* eslint-disable react/display-name */
import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputType = InputHTMLAttributes<HTMLInputElement> & {
	opcional?: boolean
	className?: string
	error?: string
}

export const Input = forwardRef<HTMLInputElement, InputType>(
	({ opcional = false, className, error, ...props }, ref) => {
		return (
			<div className={clsx('relative w-full', className)}>
				<input
					type='text'
					className={clsx(
						'p-3 w-full rounded-[4px] placeholder:text-gray-label text-sm border-gray-button focus:border-yellow-dark focus:ring-yellow-dark bg-gray-input',
						{ 'pr-[70px]': opcional, '': error }
					)}
					ref={ref}
					{...props}
				/>

				{opcional && (
					<span className='absolute text-xs italic -translate-y-1/2 text-gray-label top-1/2 right-3'>Opcional</span>
				)}

				{error && <p className='mt-1 text-xs text-yellow-dark'>{error}</p>}
			</div>
		)
	}
)
