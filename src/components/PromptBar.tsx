'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import type { ChatMessage } from '@/src/types/chatMessage.types'
import type { Data } from '@/src/types/promptBar.types'
import { fetchData } from '@/src/utils/fetchData'
import Image from 'next/image'
import { memo } from 'react'
import { useForm } from 'react-hook-form'

function PromptBar() {
	const { register, handleSubmit, reset } = useForm<Data>()
	const {
		addMessage,
		model,
		isLoading,
		setIsLoading,
		historyOfDialog,
		setHistoryOfDialog,
		setIsFirstSend,
		isFirstSend,
	} = useMessageStore()

	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		setIsFirstSend(true)
		setIsLoading(true)

		const base64 = await fileToBase64(file)

		const userMessage: ChatMessage = {
			role: 'user',
			key: crypto.randomUUID(),
			content: [
				{ type: 'text', text: 'Вот изображение' },
				{ type: 'image_url', image_url: base64 },
			],
		}

		const newHistory = [...historyOfDialog, userMessage]
		setHistoryOfDialog(newHistory)

		addMessage({
			text: '[ФОТО ОТПРАВЛЕНО]',
			sender: 'user',
			key: crypto.randomUUID(),
		})

		const response = await fetchData(model, newHistory)

		setHistoryOfDialog(prev => [
			...prev,
			{ role: 'assistant', content: response, key: crypto.randomUUID() },
		])

		addMessage({
			text: response,
			sender: 'assistant',
			key: crypto.randomUUID(),
		})

		setIsLoading(false)
	}

	const fileToBase64 = (file: File) =>
		new Promise<string>((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => {
				const base64 = reader.result as string
				resolve(base64)
			}
			reader.onerror = reject
			reader.readAsDataURL(file)
		})

	const onSubmit = async (data: Data) => {
		setIsFirstSend(true)
		if (!data.prompt) return
		if (isLoading) return
		const userPrompt: ChatMessage = {
			role: 'user',
			content: data.prompt,
			key: crypto.randomUUID(),
		}
		const newArray = [...historyOfDialog, userPrompt]
		setHistoryOfDialog(newArray)
		setIsLoading(true)
		reset()
		addMessage({
			text: data.prompt,
			sender: 'user',
			key: crypto.randomUUID(),
		})
		try {
			const response = await fetchData(model, newArray)
			setHistoryOfDialog(prev => [
				...prev,
				{ role: 'assistant', content: response, key: crypto.randomUUID() },
			])
			if (response === undefined) return
			addMessage({
				text: response,
				sender: 'assistant',
				key: crypto.randomUUID(),
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex gap-3 items-center bg-white/5 border border-white/8 rounded-xl p-3 mt-3 md:w-full w-[80%]'
			style={{
				marginBottom: isFirstSend ? '20px' : '100px',
			}}
		>
			<input
				className='flex-1 bg-transparent border-none outline-none text-white'
				disabled={isLoading}
				type='text'
				autoComplete='off'
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck={false}
				onPaste={e => e.preventDefault()}
				placeholder='Напишите промпт…'
				{...register('prompt')}
			/>
			<button className='px-4 py-2 rounded-xl bg-linear-to-br from-purple-400 to-blue-400 text-[#041118] font-bold hover:opacity-90 transition-opacity hover:outline-white/20 flex items-center justify-center outline-white'>
				{isLoading ? (
					<span className='text-[12px] text-white'>Loading...</span>
				) : (
					<Image
						alt='submit button'
						src='/arrowright.svg'
						width={15}
						height={15}
					/>
				)}
			</button>
			<input
				type='file'
				accept='image/*'
				onChange={handleImageUpload}
				className='hidden'
				id='uploadImage'
			/>

			<label
				htmlFor='uploadImage'
				className='cursor-pointer px-3 py-2 bg-white/10 rounded-lg'
			>
				📷
			</label>
		</form>
	)
}

export default memo(PromptBar)
