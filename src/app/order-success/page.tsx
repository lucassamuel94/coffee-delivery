'use client'

import Image from 'next/image'

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import PictureSuccess from '../../../public/assets/picture-success.png'

export default function OrderSuccessPage() {
	return (
		<main className='container flex flex-col gap-24 pt-20 lg:flex-row'>
			<div>
				<h2 className='font-extrabold font-title text-title-lg text-yellow-dark'>Uhu! Pedido confirmado</h2>
				<p className='mt-1 text-xl text-gray-subtitle'>Agora é só aguardar que logo o café chegará até você</p>

				<div className='mt-10 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] p-10 border space-y-8 '>
					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-purple'>
							<MapPin size='16' weight='fill' />
						</div>

						<div>
							<p>
								Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
								<br /> Farrapos - Porto Alegre, RS
							</p>
						</div>
					</div>

					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-yellow'>
							<Timer size='16' weight='fill' />
						</div>

						<div>
							<p>
								Previsão de entrega
								<br /> <strong>20 min - 30 min </strong>
							</p>
						</div>
					</div>

					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center w-8 h-8 text-white rounded-full bg-yellow-dark'>
							<CurrencyDollar size='16' />
						</div>

						<div>
							<p>
								Pagamento na entrega
								<br /> <strong>Cartão de Crédito</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-end'>
				<Image
					src='/assets/picture-success.png'
					alt='Imagem do entregar saindo com pedido'
					width='492'
					height='293'
					className='cover'
					priority
				/>
			</div>
		</main>
	)
}
