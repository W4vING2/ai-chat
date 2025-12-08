'use client'

import { memo } from 'react'
import { useMessageStore } from '../store/messagesStore'
import Logo from './ui/Logo'

function ChatsSide() {
	const {
		isChatHistoryOpen,
		setIsFirstSend,
		setHistoryOfDialog,
		clearMessages,
		setIsChatHistoryOpen,
	} = useMessageStore()

	const reset = () => {
		setIsFirstSend(false)
		setHistoryOfDialog([])
		clearMessages()
		setIsChatHistoryOpen(false)
	}

	return (
		<aside
			className='glass bg-white/6 backdrop-blur-lg border border-white/12 rounded-r-none rounded-l-2xl p-5 md:block fixed md:static top-0 right-0 h-full md:h-auto w-[260px] md:w-auto transition-left duration-300 z-5'
			style={{
				right: isChatHistoryOpen ? '0' : '-300px',
			}}
		>
			<div className='flex items-center gap-3 mb-6'>
				<Logo text='история чатов' />
			</div>
			<div className='flex justify-center w-full mt-5'>
				<button
					className='border border-white/50 rounded-md p-2'
					onClick={reset}
				>
					New Chat
				</button>
			</div>
		</aside>
	)
}

export default memo(ChatsSide)
