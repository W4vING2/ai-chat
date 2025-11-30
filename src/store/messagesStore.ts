import { create } from 'zustand'

interface IMessage {
	text: string
	sender: 'user' | 'bot'
}

interface IInitialState {
	messages: IMessage[]
	model: string
}

interface IActions {
	addMessage: (message: IMessage) => void
	setModel: (model: string) => void
}

interface Store extends IInitialState, IActions {}

export const useMessageStore = create<Store>()(set => ({
	model: 'openai/gpt-5-mini',
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
}))
