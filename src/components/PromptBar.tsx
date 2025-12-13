'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import type { ChatMessage } from '@/src/types/chatMessage.types'
import type { Data } from '@/src/types/promptBar.types'
import { fetchData } from '@/src/utils/fetchData'
import Image from 'next/image'
import { memo, useState } from 'react'
import { useForm } from 'react-hook-form'

function PromptBar() {
	const { register, handleSubmit, reset } = useForm<Data>()
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
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

		const base64 = await fileToBase64(file)
		setSelectedImage(base64)
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
		if (isLoading) return
		if (!data.prompt && !selectedImage) return

		setIsLoading(true)

		const content: ChatMessage['content'] = []

		if (data.prompt) {
			content.push({ type: 'text', text: data.prompt })
		}
		if (selectedImage) {
			content.push({ type: 'image_url', image_url: selectedImage })
		}

		const userMessage: ChatMessage = {
			role: 'user',
			key: crypto.randomUUID(),
			content,
		}

		const newArray = [...historyOfDialog, userMessage]
		setHistoryOfDialog(newArray)

		addMessage({
			text: data.prompt || '[ФОТО]',
			sender: 'user',
			key: crypto.randomUUID(),
		})

		reset()
		setSelectedImage(null)

		try {
			const response = await fetchData(model, newArray)

			setHistoryOfDialog(prev => [
				...prev,
				{ role: 'assistant', content: response, key: crypto.randomUUID() },
			])

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
		<>
			{selectedImage && (
				<div className='preview'>
					<Image
						src={selectedImage}
						alt='preview'
						width={100}
						height={100}
						className='border border-white p-2'
					/>
				</div>
			)}
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
				<div className='flex gap-2 items-stretch'>
					<button className='px-4 py-2 rounded-xl bg-linear-to-br from-purple-400 to-blue-400 text-[#041118] font-bold hover:opacity-90 transition-opacity flex items-center justify-center'>
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

					<label
						htmlFor='uploadImage'
						className='cursor-pointer px-4 py-2 bg-white/10 rounded-xl flex items-center justify-center'
					>
						📷
					</label>
				</div>

				<input
					type='file'
					accept='image/*'
					onChange={handleImageUpload}
					className='hidden'
					id='uploadImage'
				/>
			</form>
		</>
	)
}

export default memo(PromptBar)
