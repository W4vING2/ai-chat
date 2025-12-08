export type ChatRole = 'user' | 'assistant' | 'system'

export interface IChatMessage {
	role: ChatRole
	content: string
	key: string
}

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
	historyOfDialog: IChatMessage[]
	isFirstSend: boolean
	isChatHistoryOpen: boolean
}

interface IActions {
	addMessage: (message: IMessage) => void
	setModel: (model: string) => void
	toggleBurger: () => void
	setIsLoading: (isLoading: boolean) => void
	setHistoryOfDialog: (
		updater: IChatMessage[] | ((prev: IChatMessage[]) => IChatMessage[])
	) => void
	setIsFirstSend: (isFirstSend: boolean) => void
	setIsChatHistoryOpen: (isChatHistoryOpen: boolean) => void
	clearMessages: () => void
}

export interface Store extends IInitialState, IActions {}
