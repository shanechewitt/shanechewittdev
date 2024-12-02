'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
	const pathname = usePathname();

	const navItems = [
		{ name: 'WORK', path: '/work' },
		{ name: 'PROJECTS', path: '/projects' },
		{ name: 'PASSIONS', path: '/passions' },
		{ name: 'EDUCATION', path: '/education' },
	];

	return (
		<nav className='w-full py-4 px-6 flex justify-between items-center border-b border-gray-200'>
			<Link
				href='/'
				className='flex items-center space-x-4'
			>
				{/* <div className='w-12 h-12 relative rounded-full overflow-hidden'>
					<img
						src='/api/placeholder/48/48'
						alt='Profile'
						className='rounded-full'
					/>
				</div> */}
				<span className='font-mono text-xl'>SHANE HEWITT</span>
			</Link>

			<div className='flex space-x-6'>
				{navItems.map((item) => (
					<Link
						key={item.name}
						href={item.path}
						className={`font-mono ${
							pathname === item.path
								? 'text-black'
								: 'text-gray-500 hover:text-black transition-colors'
						}`}
					>
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
