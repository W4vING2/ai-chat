import { ChatMessage } from '../types/chatMessage.types'

export interface IMessage {
	text: string
	sender: 'user' | 'assistant'
	key: string
}

interface IInitialState {
	messages: IMessage[]
	model: string
	isBurgerOpen: boolean
	isLoading: boolean
	historyOfDialog: ChatMessage[]
	isFirstSend: boolean
	isChatHistoryOpen: boolean
}

interface IActions {
	addMessage: (message: IMessage) => void
	setModel: (model: string) => void
	toggleBurger: () => void
	setIsLoading: (isLoading: boolean) => void
	setIsFirstSend: (isFirstSend: boolean) => void
	setIsChatHistoryOpen: (isChatHistoryOpen: boolean) => void
	clearMessages: () => void
	setHistoryOfDialog: (
		updater: ChatMessage[] | ((prev: ChatMessage[]) => ChatMessage[])
	) => void
}

export interface Store extends IInitialState, IActions {}
