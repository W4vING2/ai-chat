import BurgerSide from '@/src/components/BurgerSide'
import ChatArea from '@/src/components/ChatArea'
import ChatsSide from './ChatsSide'

export default function Layout() {
	return (
		<div className='w-full max-w-[1100px] h-screen grid grid-cols-[300px_1fr] gap-6'>
			<BurgerSide />
			<ChatArea />
			<ChatsSide />
		</div>
	)
}
