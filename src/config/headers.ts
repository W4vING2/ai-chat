import { API_KEY } from './apiKey'

export const headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${API_KEY}`,
	'HTTP-Referer': 'https://liquiddmind.vercel.app/',
	'X-Title': 'My App',
}
