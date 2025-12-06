'use client'

import ChatWindow from '@/src/components/ChatWindow'
import PromptBar from '@/src/components/PromptBar'
import { useMessageStore } from '@/src/store/messagesStore'
import StartMessage from './ui/StartMessage'

{
	/* <main className='glass md:bg-white/6 bg-transparent md:border md:border-white/12 rounded-xs md:rounded-2xl md:p-5 flex flex-col min-h-dvh md:min-h-[95dvh] md:w-[75dvw] w-screen md:m-auto justify-center items-center'> */
}

export default function ChatArea() {
	const { toggleBurger, isFirstSend } = useMessageStore()
	return (
		<main className='glass bg-transparent rounded-xs md:rounded-2xl md:p-5 flex flex-col min-h-dvh md:min-h-[95dvh] md:w-[75dvw] w-screen md:m-auto justify-center items-center'>
			<div className='flex items-center gap-3 mb-4 w-full h-[60px] md:hidden'>
				<button className='fixed w-10 h-10 flex items-center justify-center top-4 left-4 z-1 p-3 bg-white/10 rounded-lg md:hidden'>
					💬
				</button>
				<button
					className='fixed w-10 h-10 flex items-center justify-center top-4 right-4 z-1 p-3 bg-white/10 rounded-lg md:hidden'
					onClick={toggleBurger}
				>
					☰
				</button>
			</div>
			{!isFirstSend && <StartMessage />}
			{isFirstSend && <ChatWindow />}
			<PromptBar />
		</main>
	)
}
