'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import { memo } from 'react'

interface ModelProps {
	idx: number
	model: string
	active: number
	setActive: (idx: number) => void
}

const Model: React.FC<ModelProps> = ({ idx, model, active, setActive }) => {
	const { setModel } = useMessageStore()

	const handleClick = () => {
		if (active !== idx) {
			setActive(idx)
			setModel(model)
		}
	}

	// стили из HTML
	const style: React.CSSProperties = {
		padding: '10px 12px',
		borderRadius: '10px',
		background: active === idx ? 'rgba(124,124,255,0.15)' : 'transparent',
		color: active === idx ? '#7c7cff' : '#9aa4b2',
		fontSize: '14px',
		cursor: 'pointer',
		transition: 'background 0.2s, color 0.2s',
	}

	const hoverStyle: React.CSSProperties = {
		background: 'rgba(20,24,32,0.65)',
		color: '#e6eaf0',
	}

	return (
		<div
			onClick={handleClick}
			style={style}
			onMouseEnter={e =>
				Object.assign((e.target as HTMLDivElement).style, hoverStyle)
			}
			onMouseLeave={e =>
				Object.assign((e.target as HTMLDivElement).style, style)
			}
		>
			{model}
		</div>
	)
}

export default memo(Model)
