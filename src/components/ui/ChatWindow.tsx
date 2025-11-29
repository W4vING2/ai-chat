import React from 'react'

const ChatWindow: React.FC = () => {
	return (
		<div className='flex-1 bg-white/4 border border-white/8 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto'>
			<div className='bg-white/5 border border-white/10 p-3 rounded-xl max-w-[70%]'>
				Здравствуйте! Я — демонстрационная модель LiquidGlass.
			</div>
			<div className='bg-gradient-to-br from-purple-400 to-teal-400 text-[#041118] p-3 rounded-xl max-w-[70%] ml-auto'>
				Сделай современный интерфейс с эффектом liquid glass.
			</div>
			<div className='bg-white/5 border border-white/10 p-3 rounded-xl max-w-[70%]'>
				Готово! Мягкое стекло, неоновые акценты и глубина.
			</div>
		</div>
	)
}

export default ChatWindow
