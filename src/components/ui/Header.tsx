import { useMessageStore } from '@/src/store/messagesStore'

export default function Header() {
	const { toggleBurger, setIsChatHistoryOpen, isChatHistoryOpen } =
		useMessageStore()
	return (
		<div className='flex items-center gap-3 mb-5 w-full h-20 md:hidden overflow-hidden'>
			<button
				className='fixed w-10 h-10 flex items-center justify-center top-4 left-4 z-1 p-3 bg-white/10 rounded-lg md:hidden'
				onClick={() => setIsChatHistoryOpen(!isChatHistoryOpen)}
			>
				💬
			</button>
			<button
				className='fixed w-10 h-10 flex items-center justify-center top-4 right-4 z-1 p-3 bg-white/10 rounded-lg md:hidden'
				onClick={toggleBurger}
			>
				☰
			</button>
		</div>
	)
}
