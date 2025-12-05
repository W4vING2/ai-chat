import { create } from 'zustand'
import type { IMessage, Store } from './store.types'

export const useMessageStore = create<Store>()(set => ({
	historyOfDialog: [
		{
			role: 'assistant',
			content:
				'Привет! Я ваш помощник по программированию. Как я могу помочь вам сегодня?',
			key: crypto.randomUUID(),
		},
	],
	model: 'openai/gpt-5.1-chat',
	isLoading: false,
	isBurgerOpen: false,
	messages: [
		{
			text: 'Привет! Я ваш помощник по программированию. Как я могу помочь вам сегодня?',
			sender: 'assistant',
			key: crypto.randomUUID(),
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
	setHistoryOfDialog: updater =>
		set(state => ({
			historyOfDialog:
				typeof updater === 'function'
					? updater(state.historyOfDialog)
					: updater,
		})),
}))
