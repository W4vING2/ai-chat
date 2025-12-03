import ChatArea from '@/src/components/ChatArea'
import Sidebar from '@/src/components/SideBar'

export default function Layout() {
	return (
		<div className='w-full max-w-[1100px] h-screen grid grid-cols-[300px_1fr] gap-6'>
			<Sidebar />
			<ChatArea />
		</div>
	)
}
