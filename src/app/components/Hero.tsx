import Image from 'next/image'
import PictureHero from '../../../public/assets/picture-hero.png'
import { Features } from './Features'

export function Hero() {
	return (
		<div className="min-h-[500px] bg-[url('/assets/effect-hero.png')] bg-cover bg-center bg-no-repeat flex items-center">
			<div className='container flex flex-col-reverse items-center lg:items-start lg:flex-row gap-14'>
				<div className='text-center lg:text-start'>
					<h2 className='font-extrabold font-title text-title-lg md:text-title-xl text-gray-title'>
						Encontre o café perfeito para qualquer hora do dia
					</h2>

					<p className='mt-4 text-xl text-gray-subtitle'>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
					</p>

					<Features />
				</div>

				<Image
					src={PictureHero}
					alt='Imagem do copo de café da Coffee Delivery em material reciclável com grãos de café em volta'
					className='md:-mr-5'
				/>
			</div>
		</div>
	)
}
