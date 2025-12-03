'use client'

import ChatWindow from '@/src/components/ChatWindow'
import PromptBar from '@/src/components/PromptBar'
import { useMessageStore } from '@/src/store/messagesStore'
import Logo from './ui/Logo'

export default function ChatArea() {
	const { toggleBurger } = useMessageStore()
	return (
		<main className='glass bg-white/6 border border-white/12 rounded-xs md:rounded-2xl md:p-5 flex flex-col h-screen p-3 md:w-[75vw] w-screen md:m-auto'>
			<div className='flex items-center gap-3 mb-4'>
				<Logo primaryText='AI' secondaryText='Чат' />
				<button
					className='fixed w-[50px] h-[50px] top-5 right-5 z-90 p-3 bg-white/10 rounded-lg md:hidden'
					onClick={toggleBurger}
				>
					☰
				</button>
			</div>
			<ChatWindow />
			<PromptBar />
		</main>
	)
}
