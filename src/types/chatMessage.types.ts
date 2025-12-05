export type ChatMessage = {
	role: 'user' | 'assistant' | 'system'
	content: string
	key: string
}
