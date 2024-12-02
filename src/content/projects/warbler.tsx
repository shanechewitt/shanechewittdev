export default function Warbler() {
	return (
		<div className='space-y-8'>
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>Warbler</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Gamified Musicianship Education
				</h2>
			</div>
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Overview</h2>
				<p className='font-mono text-gray-800'>
					Warbler is transforming music education through an engaging,
					game-based platform that makes learning music theory and ear training
					both effective and enjoyable.
				</p>
			</section>

			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Challenge</h2>
				<p className='font-mono text-gray-800'>
					Traditional music education faces significant hurdles: limited
					individualized feedback, difficulty tracking student progress, and
					maintaining student engagement - especially in remote learning
					environments. Music educators need tools that can provide immediate
					feedback while keeping students motivated and excited about learning.
				</p>
			</section>

			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Solution</h2>
				<p className='font-mono text-gray-800 mb-4'>
					As a core developer for Warbler, I architected a comprehensive
					learning platform that bridges the gap between traditional music
					education and modern technology. The platform centers around five
					carefully designed activity types:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-none ml-4'>
					<li>
						<span className='font-medium'>Interval Training:</span> Building
						recognition of musical distances between notes
					</li>
					<li>
						<span className='font-medium'>Rhythm Training:</span> Developing
						precise timing and rhythm understanding
					</li>
					<li>
						<span className='font-medium'>Simple Singing:</span> Practicing
						pitch accuracy and vocal control
					</li>
					<li>
						<span className='font-medium'>Active Listening:</span> Enhancing
						audio perception and musical memory
					</li>
					<li>
						<span className='font-medium'>Sight-reading:</span> Strengthening
						the connection between written music and sound
					</li>
				</ul>
			</section>

			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Technical Implementation
				</h2>
				<div className='space-y-4'>
					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Backend Architecture:
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>
								Designed a flexible database schema to handle diverse music
								education content
							</li>
							<li>
								Implemented secure API endpoints for real-time student feedback
							</li>
							<li>
								Created a robust system for storing and analyzing student
								performance data
							</li>
						</ul>
					</div>
					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Frontend Integration:
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>
								Collaborated on building an intuitive interface for lesson
								creation
							</li>
							<li>
								Developed responsive components for various musical activities
							</li>
							<li>
								Integrated Web Audio API for precise timing and pitch detection
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Impact</h2>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Serving music educators and students across multiple institutions
					</li>
					<li>
						Enabling personalized learning paths for students at different skill
						levels
					</li>
					<li>
						Creating an engaging platform where students actively want to
						practice and improve
					</li>
				</ul>
				<p className='font-mono text-gray-800 mt-4'>
					Visit{' '}
					<a
						href='https://warblermusic.com'
						className='text-blue-600 hover:underline'
					>
						warblermusic.com
					</a>{' '}
					to see the platform in action.
				</p>
			</section>
		</div>
	);
}
