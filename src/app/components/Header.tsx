'use client'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/logo.png'
import { MapPin } from '@phosphor-icons/react'
import { ButtonCart } from '@/components'

export function Header() {
	return (
		<header className='h-[104px] flex items-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/'>
					<Image src={Logo} alt='Logo da Coffee Delivery' />
				</Link>

				<nav className='inline-flex items-center gap-3'>
					<div className='inline-flex items-center gap-1 p-2 rounded-md text-purple bg-purple-light'>
						<MapPin size='22' weight='fill' />
						<span>Porto Alegre, RS</span>
					</div>

					<Link href='checkout'>
						<ButtonCart />
					</Link>
				</nav>
			</div>
		</header>
	)
}
