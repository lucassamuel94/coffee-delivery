'use client'

import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { useCart } from '@/store/cart'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

export default function HomePage() {
	const router = useRouter()

	const formCompleteOrderSchema = z.object({
		zipCode: z.string().min(1, { message: 'CEP é obrigatório' }).max(9, 'O CEP pode ter no máximo 9 caracteres'),
		street: z.string().min(1, { message: 'Rua é obrigatório' }),
		number: z.string().min(1, { message: 'Número é obrigatório' }),
		complement: z.string(),
		district: z.string().min(1, { message: 'Bairro é obrigatório' }),
		city: z.string().min(1, { message: 'Cidade é obrigatório' }),
		country: z.string().min(1, { message: 'UF é obrigatório' }),
	})

	type formCompleteOrder = z.infer<typeof formCompleteOrderSchema>

	const methods = useForm<formCompleteOrder>({
		resolver: zodResolver(formCompleteOrderSchema),

		criteriaMode: 'all',
		mode: 'all',

		defaultValues: {
			zipCode: '',
			street: '',
			number: '',
			complement: '',
			district: '',
			city: '',
			country: '',
		},
	})

	function onSubmit(data: formCompleteOrder) {
		router.push('/order-success')
	}

	return (
		<FormProvider {...methods}>
			<form
				className='container pt-10 grid lg:grid-cols-[1fr,_448px] gap-8'
				onSubmit={methods.handleSubmit(onSubmit)}
				noValidate
			>
				<CompleteYourOrder />
				<SelectedCoffees />
			</form>
		</FormProvider>
	)
}
