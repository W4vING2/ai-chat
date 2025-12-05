'use client'

import { models } from '@/src/config/models'
import { useMessageStore } from '@/src/store/messagesStore'
import { memo, useState } from 'react'
import Logo from './ui/Logo'
import Model from './ui/Model'

function Sidebar() {
	const [active, setActive] = useState(0)
	const { isBurgerOpen } = useMessageStore()

	return (
		<aside
			className='glass bg-white/6 backdrop-blur-lg border border-white/12 rounded-2xl p-5 md:block fixed md:static top-0 left-0 h-full md:h-auto w-[260px] md:w-auto transition-left duration-300'
			style={{
				left: isBurgerOpen ? '0' : '-300px',
			}}
		>
			<div className='flex items-center gap-3 mb-6'>
				<Logo primaryText='LM' secondaryText='Выбор модели' />
			</div>
			<div className='flex flex-col gap-2'>
				{models.map((model, idx) => (
					<Model
						key={idx}
						idx={idx}
						model={model}
						active={active}
						setActive={setActive}
					/>
				))}
			</div>
		</aside>
	)
}

export default memo(Sidebar)
