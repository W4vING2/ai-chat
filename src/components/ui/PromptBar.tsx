import React from 'react'

const PromptBar: React.FC = () => {
	return (
		<div className='flex gap-3 items-center bg-white/5 border border-white/8 rounded-xl p-3 mt-3'>
			<input
				className='flex-1 bg-transparent border-none outline-none text-white'
				placeholder='Напишите промпт…'
			/>
			<button className='px-4 py-2 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 text-[#041118] font-bold'>
				Отправить
			</button>
		</div>
	)
}

export default PromptBar
