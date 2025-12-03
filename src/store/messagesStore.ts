import { create } from 'zustand'
import type { IMessage, Store } from './store.types'

export const useMessageStore = create<Store>()(set => ({
	model: 'openai/gpt-5-mini',
	isLoading: false,
	isBurgerOpen: false,
	messages: [
		{
			text: 'Привет! Я ваш помощник по программированию. Как я могу помочь вам сегодня?',
			sender: 'bot',
		},
	],
	addMessage: (message: IMessage) =>
		set(state => ({
			messages: [...state.messages, message],
		})),
	setModel: (model: string) =>
		set(() => ({
			model: model,
		})),
	toggleBurger: () =>
		set(state => ({
			isBurgerOpen: !state.isBurgerOpen,
		})),
	setIsLoading: (isLoading: boolean) => set({ isLoading }),
}))
