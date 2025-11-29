import ChatWindow from '@/src/components/ui/ChatWindow'
import PromptBar from '@/src/components/ui/PromptBar'
import React from 'react'

const ChatArea: React.FC = () => {
	return (
		<main className='glass bg-white/6 backdrop-blur-lg border border-white/12 rounded-2xl flex flex-col h-[90vh] p-5 md:w-[75vw] w-[85vw] ml-[14%] mt-[13%] md:m-auto'>
			<div className='flex items-center gap-3 mb-4'>
				<div className='w-14 h-14 rounded-lg bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center font-bold text-[#041118]'>
					AI
				</div>
				<div>
					<div className='font-bold'>Liquid-Core v1</div>
					<div className='text-xs text-white/55'>Предпросмотр</div>
				</div>
				<button className='fixed w-[50px] h-[50px] top-5 right-5 z-90 p-3 bg-white/10 rounded-lg'>
					☰
				</button>
			</div>
			<ChatWindow />
			<PromptBar />
		</main>
	)
}

export default ChatArea
