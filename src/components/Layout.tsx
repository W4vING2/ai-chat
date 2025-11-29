import ChatArea from '@/src/components/ui/ChatArea'
import Sidebar from '@/src/components/ui/SideBar'
import React, { ReactNode } from 'react'

interface LayoutProps {
	children?: ReactNode
}

const Layout: React.FC<LayoutProps> = () => {
	return (
		<div className='w-full max-w-[1100px] h-screen grid grid-cols-[300px_1fr] gap-6'>
			<Sidebar />
			<ChatArea />
		</div>
	)
}

export default Layout
