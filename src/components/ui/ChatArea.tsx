'use client'

import ChatWindow from '@/src/components/ui/ChatWindow'
import PromptBar from '@/src/components/ui/PromptBar'
import { useMessageStore } from '@/src/store/messagesStore'

export default function ChatArea() {
	const { toggleBurger } = useMessageStore()
	return (
		<main className='glass bg-white/6 border border-white/12 rounded-xs md:rounded-2xl md:p-5 flex flex-col h-screen p-3 md:w-[75vw] w-screen md:m-auto'>
			<div className='flex items-center gap-3 mb-4'>
				<div className='w-14 h-14 rounded-lg bg-linear-to-br from-blue-400 to-teal-400 flex items-center justify-center font-bold text-[#041118]'>
					AI
				</div>
				<div>
					<div className='font-bold'>LiquidMind v1.3</div>
					<div className='text-xs text-white/55'>Чат</div>
				</div>
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
