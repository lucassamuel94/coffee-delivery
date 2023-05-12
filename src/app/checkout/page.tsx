import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

export default function HomePage() {
	return (
		<main className='container pt-10 grid lg:grid-cols-[1fr,_448px] gap-8'>
			<CompleteYourOrder />
			<SelectedCoffees />
		</main>
	)
}
