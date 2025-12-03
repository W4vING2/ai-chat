import type { MessageProps } from '@/src/types/message.types'

export default function Message({ sender, text, index }: MessageProps) {
	return (
		<div
			className='bg-white/5 border border-white/10 p-3 rounded-xl max-w-[90%] overflow-wrap break-word text-white'
			key={index}
			style={{
				alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
				background:
					sender === 'user'
						? 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)'
						: 'rgba(255, 255, 255, 0.05)',
			}}
		>
			{text}
		</div>
	)
}
