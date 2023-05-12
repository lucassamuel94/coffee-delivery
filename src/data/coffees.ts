export type CoffeeType = {
	id: number
	name: string
	description: string
	photo: string
	price: number
	tags: string[]
}

export const coffees: CoffeeType[] = [
	{
		id: 1,
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		photo: 'expresso-tradicional',
		price: 9.9,
		tags: ['tradicional'],
	},
	{
		id: 2,
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		photo: 'expresso-americano',
		price: 9.9,
		tags: ['tradicional'],
	},
	{
		id: 3,
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		photo: 'expresso-cremoso',
		price: 9.9,
		tags: ['tradicional'],
	},
	{
		id: 4,
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		photo: 'expresso-gelado',
		price: 9.9,
		tags: ['tradicional', 'gelado'],
	},
	{
		id: 5,
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		photo: 'cafe-com-leite',
		price: 9.9,
		tags: ['tradicional', 'com leite'],
	},
	{
		id: 6,
		name: 'Latte',
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		photo: 'latte',
		price: 9.9,
		tags: ['tradicional', 'com leite'],
	},
	{
		id: 7,
		name: 'Capuccino',
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		photo: 'capuccino',
		price: 9.9,
		tags: ['tradicional', 'com leite'],
	},
	{
		id: 8,
		name: 'Macchiato',
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		photo: 'macchiato',
		price: 9.9,
		tags: ['tradicional', 'com leite'],
	},
	{
		id: 9,
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		photo: 'mocaccino',
		price: 9.9,
		tags: ['tradicional', 'com leite'],
	},
	{
		id: 10,
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		photo: 'chocolate-quente',
		price: 9.9,
		tags: ['especial', 'com leite'],
	},
	{
		id: 11,
		name: 'Cubano',
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		photo: 'cubano',
		price: 9.9,
		tags: ['especial', 'com leite'],
	},
	{
		id: 12,
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		photo: 'havaiano',
		price: 9.9,
		tags: ['especial', 'com leite'],
	},
	{
		id: 13,
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		photo: 'arabe',
		price: 9.9,
		tags: ['especial'],
	},
	{
		id: 14,
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		photo: 'irlandes',
		price: 9.9,
		tags: ['especial', 'alcoólico'],
	},
]
