'use client'

import ChatWindow from '@/src/components/ChatWindow'
import PromptBar from '@/src/components/PromptBar'
import { useMessageStore } from '@/src/store/messagesStore'
import Header from './ui/Header'
import StartMessage from './ui/StartMessage'

export default function ChatArea() {
	const { isFirstSend } = useMessageStore()
	return (
		<main className='glass bg-transparent rounded-xs md:rounded-2xl md:p-5 flex flex-col min-h-dvh md:min-h-[95dvh] md:w-[75dvw] w-screen md:m-auto justify-center items-center max-h-full'>
			<Header />
			{!isFirstSend && <StartMessage />}
			{isFirstSend && <ChatWindow />}
			<PromptBar />
		</main>
	)
}
