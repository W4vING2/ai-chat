import type { LogoProps } from '@/src/types/logo.types'
import { memo } from 'react'

function Logo({ primaryText, secondaryText }: LogoProps) {
	return (
		<>
			<div className='w-14 h-14 rounded-lg bg-linear-to-br from-blue-400 to-teal-400 flex items-center justify-center font-bold text-[#041118]'>
				{primaryText}
			</div>
			<div>
				<div className='font-bold'>LiquidMind v1.6</div>
				<div className='text-xs text-white/55'>{secondaryText}</div>
			</div>
		</>
	)
}

export default memo(Logo)
