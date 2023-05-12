export function priceWithBRL(value: number) {
	const formatter = Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})

	return formatter.format(value)
}
