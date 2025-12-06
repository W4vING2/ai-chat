import { create } from 'zustand'
import type { IMessage, Store } from './store.types'

export const useMessageStore = create<Store>()(set => ({
	historyOfDialog: [],
	isFirstSend: false,
	model: 'openai/gpt-5.1-chat',
	isLoading: false,
	isBurgerOpen: false,
	messages: [],
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
	setIsFirstSend: (isFirstSend: boolean) => set({ isFirstSend }),
}))
