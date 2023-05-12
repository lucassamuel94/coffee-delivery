'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { produce, original } from 'immer'
import { CoffeeType } from '@/data/coffees'

export type CoffeeItemCard = CoffeeType & {
	id: number
	name: string
	description: string
	photo: string
	price: number
	totalPrice: number
	tags: string[]
	quantity: number
}

export type CartType = {
	items: CoffeeItemCard[]
	delivery: number
	add: (coffee: CoffeeItemCard) => void
	remove: (coffee: CoffeeItemCard) => void
	changeQuantity: (coffee: CoffeeItemCard, method: 'increment' | 'decrement') => void
}

export const useCart = create(
	persist<CartType>(
		(set) => ({
			items: [],
			delivery: 3.5,
			add: (coffee: CoffeeItemCard) => {
				set(
					produce((state: CartType) => {
						const coffeeExistInCart = original(state.items)!.findIndex((item) => item.id === coffee.id)

						if (coffeeExistInCart < 0) {
							state.items.push(coffee)
						} else {
							state.items[coffeeExistInCart].quantity += coffee.quantity
						}
					})
				)
			},
			remove: (coffee: CoffeeItemCard) => {
				set(
					produce((state: CartType) => {
						const index = original(state.items)!.findIndex((item) => item.id === coffee.id)

						if (index > -1) {
							state.items.splice(index, 1)
						}
					})
				)
			},
			changeQuantity: (coffee: CoffeeItemCard, method) => {
				set(
					produce((state: CartType) => {
						const index = original(state.items)!.findIndex((item) => item.id === coffee.id)

						if (index > -1 && method === 'increment') {
							state.items[index].quantity += 1
							state.items[index].totalPrice = state.items[index].price * state.items[index].quantity
						} else if (index > -1 && method === 'decrement' && state.items[index].quantity !== 1) {
							state.items[index].quantity -= 1
							state.items[index].totalPrice = state.items[index].price * state.items[index].quantity
						}
					})
				)
			},
		}),
		{ name: 'CART_COFFEES_KEY' }
	)
)
