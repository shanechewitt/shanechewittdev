// components/content/passions/PublicSpeaking.tsx

export default function PublicSpeaking() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>Public Speaking</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					The Art of Public Speaking: From Competition to Career
				</h2>
			</div>

			{/* Competitive Origins */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Competitive Origins
				</h2>
				<p className='font-mono text-gray-800'>
					My journey in public speaking began on the national speech and debate
					circuit, where I specialized in Great Speeches and Original Oratory.
					This unique Minnesota competitive category challenged us to not just
					memorize and perform historic speeches, but to dissect their
					rhetorical brilliance.
				</p>
			</section>

			{/* Analyzing the Greats */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Analyzing the Greats
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Through countless hours studying masterful orators, I developed a deep
					appreciation for the power of well-crafted rhetoric. Some of the most
					impactful speeches I analyzed include:
				</p>
				<ul className='font-mono text-gray-800 space-y-4 list-none ml-6'>
					<li>
						<span className='font-medium'>
							Ronald Reagan's "Evil Empire" (1983):
						</span>{' '}
						A masterclass in moral clarity and persuasive storytelling
					</li>
					<li>
						<span className='font-medium'>
							Harold Ickes' "What is an American?" (1942):
						</span>{' '}
						A powerful exploration of national identity during wartime
					</li>
					<li>
						<span className='font-medium'>
							Harold MacMillan's "Wind of Change" (1960):
						</span>{' '}
						A profound statement on decolonization and global change
					</li>
				</ul>

				<div className='mt-6'>
					<p className='font-mono text-gray-800 mb-4'>
						Each speech taught me different aspects of effective communication:
					</p>
					<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
						<li>The power of metaphor and imagery</li>
						<li>The importance of timing and delivery</li>
						<li>How to structure arguments for maximum impact</li>
						<li>The delicate balance of emotion and logic</li>
					</ul>
				</div>
			</section>

			{/* Lasting Impact */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Lasting Impact</h2>
				<p className='font-mono text-gray-800 mb-4'>
					The skills I developed in speech and debate have become foundational
					to my professional and personal life. From delivering my high school
					commencement address to leading technical presentations in my current
					role, public speaking remains one of my most valuable skills.
				</p>

				<p className='font-mono text-gray-800 mb-4'>
					Today, I approach every presentation opportunity with the same
					analytical mindset I developed in competition, always asking:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>How can I best connect with this specific audience?</li>
					<li>What structure will make this message most impactful?</li>
					<li>How can I use rhetorical techniques to enhance understanding?</li>
				</ul>
			</section>

			{/* Conclusion */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					This foundation in competitive public speaking hasn't just made me a
					better communicator— it's shaped how I think, analyze, and connect
					with others in every aspect of life.
				</p>
			</section>
		</div>
	);
}
