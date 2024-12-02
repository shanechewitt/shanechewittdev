import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shane Hewitt - Software Engineer',
	description: 'Personal website of Shane Hewitt, Software Engineering Lead',
};

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center min-h-[calc(100vh-76px)] p-6'>
			<div className='space-y-4 text-center'>
				<h1 className='font-mono text-2xl font-medium'>
					Hi - I&apos;m Shane Hewitt
				</h1>
				<p className='font-mono text-lg text-gray-600'>A software engineer</p>
			</div>
		</div>
	);
}
