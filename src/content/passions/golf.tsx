// components/content/passions/Golf.tsx

export default function Golf() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>Golf</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Golf: A Journey of Growth and Guidance
				</h2>
			</div>

			{/* Introduction */}
			<section>
				<p className='font-mono text-gray-800'>
					As a 3-handicap golfer, my relationship with the game extends far
					beyond personal achievement. While I chase birdies in all seasons
					(yes, even in winter!), my true passion lies in sharing the game with
					others.
				</p>
			</section>

			{/* Teaching Philosophy */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Teaching Philosophy
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Golf is unique in its ability to blend technical precision with mental
					fortitude. When teaching friends, I focus on:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Breaking down complex movements into digestible pieces</li>
					<li>Building confidence through small, achievable wins</li>
					<li>Creating a fun, pressure-free learning environment</li>
					<li>Emphasizing the mental aspects of the game</li>
				</ul>
			</section>

			{/* Moments of Joy */}
			<section>
				<p className='font-mono text-gray-800'>
					The greatest reward isn't in lowering my own scores, but in watching
					friends experience their breakthrough moments—whether it's their first
					solid contact, a challenging par save, or finally breaking 100. These
					moments of shared joy remind me why I fell in love with the game in
					the first place.
				</p>
			</section>

			{/* Conclusion */}
			<section className='italic'>
				<p className='font-mono text-gray-800'>
					Golf isn't just a sport for me—it's a vehicle for connection, growth,
					and endless learning. Every round offers new challenges and
					opportunities, whether I'm working on my own game or helping others
					improve theirs.
				</p>
			</section>
		</div>
	);
}
