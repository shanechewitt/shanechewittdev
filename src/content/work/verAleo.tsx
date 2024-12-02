// components/content/work/VerAleo.tsx

export default function VerAleo() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<div className='flex justify-center mb-8'>
					<img
						src='/veraleo-logo.png'
						alt='VerAleo'
						className='h-16'
					/>
				</div>
				<h1 className='font-mono text-3xl font-medium mb-2'>
					Current Role: Software Engineering Lead
				</h1>
			</div>

			{/* Overview */}
			<section>
				<p className='font-mono text-gray-800'>
					As <span className='font-medium'>Software Engineering Lead</span> at
					VerAleo, I spearhead the development of innovative solutions in the
					complex world of tax credit processing and consulting. My role
					combines technical leadership with strategic thinking to transform how
					we handle multi-million dollar deal flows.
				</p>
			</section>

			{/* What I Do */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>What I Do</h2>
				<p className='font-mono text-gray-800 mb-4'>
					I specialize in bridging the gap between business challenges and
					technical solutions, with a focus on:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Collaborating with stakeholders to identify and solve critical
						business bottlenecks through automation
					</li>
					<li>
						Designing and implementing lean, efficient solutions that deliver
						maximum impact
					</li>
					<li>
						Leading strategic technical decisions, from build-vs-buy analyses to
						project prioritization
					</li>
					<li>Managing and mentoring cross-functional development teams</li>
				</ul>
			</section>

			{/* Key Achievements */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Key Achievements
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					My proudest accomplishments at VerAleo:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Developed an AI-powered system that revolutionized how we process
						government ordinances and tax credit eligibility. This solution
						automatically analyzes documents and organizes them by industry and
						region, significantly streamlining our review process.
					</li>
					<li>
						Created a dynamic form generation system that automates the
						preparation of complex tax credit claim packages, reducing
						processing time while maintaining accuracy.
					</li>
				</ul>
			</section>

			{/* Philosophy */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					These projects exemplify my approach to software engineering: finding
					elegant, scalable solutions to complex business problems while
					maintaining a focus on user experience and business value.
				</p>
			</section>
		</div>
	);
}
