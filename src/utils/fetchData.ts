import axios from 'axios'
import { headers } from '../config/headers'
import type { ChatMessage } from '../types/chatMessage.types'

export const fetchData = async (
	model: string,
	historyOfDialog: ChatMessage[]
) => {
	try {
		const res = await axios.post(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				max_tokens: 2000,
				model,
				messages: historyOfDialog,
			},
			{
				headers: headers,
			}
		)

		return res.data.choices[0].message.content
	} catch (err) {
		console.error(err)
		return 'Ошибка запроса'
	}
}
