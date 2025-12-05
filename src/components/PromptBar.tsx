'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import type { ChatMessage } from '@/src/types/chatMessage.types'
import { Data } from '@/src/types/promptBar.types'
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
	} = useMessageStore()

	const onSubmit = async (data: Data) => {
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
			className='flex gap-3 items-center bg-white/5 border border-white/8 rounded-xl p-3 mt-3'
		>
			<input
				className='flex-1 bg-transparent border-none outline-none text-white'
				disabled={isLoading}
				type='text'
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
		</form>
	)
}

export default memo(PromptBar)
