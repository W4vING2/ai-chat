import { useMessageStore } from '@/src/store/messagesStore'
import type { ModelProps } from '@/src/types/model.types'
import { setCurrentModel } from '@/src/utils/setCurrentModel'

export default function Model({ idx, model, active, setActive }: ModelProps) {
	const { setModel } = useMessageStore()
	return (
		<div
			key={idx}
			onClick={() => setCurrentModel(idx, model, setActive, setModel)}
			className={`p-2 rounded-xl cursor-pointer border border-white/8 ${
				active === idx
					? 'bg-linear-to-br from-purple-400 to-blue-400 text-[#041118] border-none'
					: ''
			}`}
		>
			{model}
		</div>
	)
}
