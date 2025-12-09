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
		<div className='flex-1 bg-transparent rounded-xl md:p-4 flex flex-col gap-4 w-[90%] md:w-[98%] max-h-full overflow-y-scroll'>
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
