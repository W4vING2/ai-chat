import logo from '@/src/app/icon.png'
import type { LogoProps } from '@/src/types/logo.types'
import Image from 'next/image'
import { memo } from 'react'

function Logo({ text }: LogoProps) {
	return (
		<>
			<Image
				src={logo}
				alt='LiquidMind'
				width={40}
				height={40}
				className='rounded-md'
			/>
			<div>
				<div className='font-bold'>LiquidMind v1.7</div>
				<div className='text-xs text-white/55'>{text}</div>
			</div>
		</>
	)
}

export default memo(Logo)
