'use client'

import React, { useState } from 'react'

const models = [
	'Liquid-Core v1',
	'Liquid-Creative v2',
	'Liquid-Ultra v3',
	'DeepSek Hybrid-X',
]

const Sidebar: React.FC = () => {
	const [active, setActive] = useState(0)

	return (
		<>
			<aside
				className={`hidden glass bg-white/6 backdrop-blur-lg border border-white/12 rounded-2xl p-5 md:block fixed md:static top-0 left-0 h-full md:h-auto w-[260px] md:w-auto transition-left duration-300`}
			>
				<div className='flex items-center gap-3 mb-6'>
					<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-teal-400 flex items-center justify-center font-bold text-[#041118]'>
						LG
					</div>
					<div>
						<div className='font-bold'>LiquidGlass UI</div>
						<div className='text-xs text-white/55'>Выбор модели</div>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					{models.map((model, idx) => (
						<div
							key={idx}
							onClick={() => setActive(idx)}
							className={`p-2 rounded-xl cursor-pointer border border-white/8 ${
								active === idx
									? 'bg-gradient-to-br from-purple-400 to-blue-400 text-[#041118] border-none'
									: ''
							}`}
						>
							{model}
						</div>
					))}
				</div>
			</aside>
		</>
	)
}

export default Sidebar
