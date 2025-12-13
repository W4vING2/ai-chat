'use client'

import { models } from '@/src/config/models'
import { useMessageStore } from '@/src/store/messagesStore'
import { memo, useState } from 'react'
import Model from './ui/Model'

const DesktopSidebar: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'models' | 'chats'>('models')
	const [activeModel, setActiveModel] = useState(0)

	const { setIsFirstSend, setHistoryOfDialog, clearMessages } =
		useMessageStore()

	const reset = () => {
		setIsFirstSend(false)
		setHistoryOfDialog([])
		clearMessages()
	}

	const sidebarStyle: React.CSSProperties = {
		width: '260px',
		background: 'rgba(11,14,19,1)',
		padding: '20px',
		borderRight: '1px solid rgba(255,255,255,0.08)',
		flexDirection: 'column',
		gap: '20px',
		borderRadius: '18px',
	}

	const buttonStyle = (active: boolean): React.CSSProperties => ({
		padding: '10px 12px',
		borderRadius: '10px',
		background: active ? 'rgba(124,124,255,0.15)' : 'transparent',
		color: active ? '#7c7cff' : '#9aa4b2',
		border: active ? '1px solid rgba(255,255,255,0.08)' : 'none',
		cursor: 'pointer',
		transition: 'background 0.2s, color 0.2s',
		fontSize: '14px',
		fontWeight: 500,
	})

	return (
		<aside style={sidebarStyle} className='hidden lg:flex'>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					marginBottom: '16px',
				}}
			>
				<button
					onClick={() => setActiveTab('models')}
					style={buttonStyle(activeTab === 'models')}
				>
					Модели
				</button>
				<button
					onClick={() => setActiveTab('chats')}
					style={buttonStyle(activeTab === 'chats')}
				>
					Чаты
				</button>
			</div>

			{activeTab === 'models' && (
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							marginTop: '8px',
						}}
					>
						{models.map((model, idx) => (
							<Model
								key={idx}
								idx={idx}
								model={model}
								active={activeModel}
								setActive={setActiveModel}
							/>
						))}
					</div>
				</div>
			)}

			{activeTab === 'chats' && (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<button
						onClick={reset}
						style={{
							border: '1px solid rgba(255,255,255,0.5)',
							borderRadius: '8px',
							padding: '8px',
							marginTop: '16px',
							width: '100%',
							cursor: 'pointer',
							background: 'transparent',
							color: '#e6eaf0',
						}}
					>
						New Chat
					</button>
				</div>
			)}
		</aside>
	)
}

export default memo(DesktopSidebar)
