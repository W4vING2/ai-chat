export type ChatRole = 'user' | 'assistant' | 'system'

export type MessagePart =
	| string
	| { type: 'text'; text: string }
	| { type: 'image_url'; image_url: string }

export interface ChatMessage {
	role: ChatRole
	content: MessagePart | MessagePart[]
	key: string
}
