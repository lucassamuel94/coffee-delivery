'use client'

import { Input, Select } from '@/components'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

type ErrorsType = {
	errors: {
		[key: string]: {
			message: string
		}
	}
}

export function CompleteYourOrder() {
	const { register, formState } = useFormContext()

	const { errors } = formState as unknown as ErrorsType

	const [method, setMethod] = useState('')

	const methodOfPayments = [
		{
			id: 1,
			method: 'credit',
			label: 'cartão de crédito',
			icon: <CreditCard size='16' className='text-purple' />,
		},
		{
			id: 2,
			method: 'debit',
			label: 'cartão de débito',
			icon: <Bank size='16' className='text-purple' />,
		},
		{
			id: 3,
			method: 'money',
			label: 'dinheiro',
			icon: <Money size='16' className='text-purple' />,
		},
	]

	return (
		<div className='space-y-4'>
			<h2 className='font-bold font-title text-title-xs text-gray-subtitle'>Complete seu pedido</h2>
			<div className='p-10 space-y-8 rounded-md bg-gray-card'>
				<header className='flex items-start gap-2 '>
					<MapPinLine size='22' className='text-yellow-dark' />

					<div>
						<h3 className='text-gray-subtitle'>Endereço de Entrega</h3>

						<p className='text-sm'>Informe o endereço onde deseja receber seu pedido</p>
					</div>
				</header>

				<div className='space-y-4'>
					<Input placeholder='CEP' {...register('zipCode')} error={errors.zipCode?.message} />

					<Input placeholder='Rua' {...register('street')} error={errors.street?.message} />
					<div className='flex flex-col gap-4 lg:flex-row'>
						<Input
							placeholder='Número'
							className='lg:max-w-[208px]'
							{...register('number')}
							error={errors.number?.message}
							maxLength={9}
						/>
						<Input
							placeholder='Complemento'
							opcional
							className='flex-1'
							{...register('complement')}
							error={errors.complement?.message}
						/>
					</div>

					<div className='flex flex-col gap-4 lg:flex-row'>
						<Input
							placeholder='Bairro'
							className='lg:max-w-[208px]'
							{...register('district')}
							error={errors.district?.message}
						/>
						<Input placeholder='Cidade' className='flex-1' {...register('city')} error={errors.city?.message} />
						<Input
							placeholder='UF'
							className='lg:max-w-[60px]'
							{...register('country')}
							error={errors.country?.message}
						/>
					</div>
				</div>
			</div>

			<div className='p-10 space-y-8 rounded-md bg-gray-card'>
				<header className='flex items-start gap-2 '>
					<CurrencyDollar size='22' className='text-purple' />

					<div>
						<h3 className='text-gray-subtitle'>Pagamento</h3>

						<p className='text-sm'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
					</div>
				</header>

				<div className='flex flex-wrap items-center gap-3'>
					{methodOfPayments.map((e) => (
						<Select
							label={e.label}
							icon={e.icon}
							key={e.id}
							isSelected={method === e.method}
							className='flex-1 min-w-[178px]'
							onClick={() => setMethod(e.method)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
