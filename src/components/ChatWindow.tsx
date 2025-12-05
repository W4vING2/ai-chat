'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import { memo, useEffect, useRef } from 'react'
import Message from './ui/Message'

function ChatWindow() {
	const { messages, isLoading } = useMessageStore()
	const bottomRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages, isLoading])

	return (
		<div className='flex-1 bg-white/4 border border-white/8 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto'>
			{messages.map(message => (
				<Message
					key={message.key}
					index={message.key}
					sender={message.sender}
					text={message.text}
				/>
			))}
			{isLoading && (
				<Message
					index={messages.length.toString()}
					sender='assistant'
					text='Typing...'
				/>
			)}
			<div ref={bottomRef} />
		</div>
	)
}

export default memo(ChatWindow)
