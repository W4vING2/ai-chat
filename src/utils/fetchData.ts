import axios from 'axios'
import { headers } from '../config/headers'

export const fetchData = async (prompt: string, model: string) => {
	if (prompt === '') return undefined

	try {
		const res = await axios.post(
			'https://openrouter.ai/api/v1/chat/completions',
			{
				max_tokens: 2000,
				model,
				messages: [{ role: 'user', content: prompt }],
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
