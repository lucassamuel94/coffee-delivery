import { CardCatalog } from '@/components'
import { coffees } from '@/data/coffees'

export function CatalogCoffees() {
	return (
		<section className='container pt-10 pb-28'>
			<h3 className='font-extrabold font-title text-title-lg text-gray-subtitle'>Nossos cafés</h3>

			<div className='grid grid-cols-1 mt-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12'>
				{coffees.map((coffee) => (
					<CardCatalog coffee={coffee} key={coffee.id} />
				))}
			</div>
		</section>
	)
}
