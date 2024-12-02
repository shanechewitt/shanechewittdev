// components/content/work/Blackbaud.tsx

export default function Blackbaud() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<div className='flex justify-center mb-8'>
					<img
						src='/blackbaud-logo.png'
						alt='Blackbaud'
						className='h-8'
					/>
				</div>
				<h1 className='font-mono text-3xl font-medium mb-2'>
					Previous Role: Software Engineer at Blackbaud
				</h1>
			</div>

			{/* Overview */}
			<section>
				<p className='font-mono text-gray-800'>
					At Blackbaud, I contributed to building mission-critical education
					technology solutions while fostering a collaborative engineering
					culture. Moving from intern to Software Engineer Level 2, I had the
					opportunity to work on systems that directly impact educational
					institutions across the country.
				</p>
			</section>

			{/* Impact and Initiatives */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Impact and Initiatives
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Beyond writing code, I took an active role in improving how our team
					worked:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Established and led a daily "Developer Check-in" that became a
						crucial part of our workflow, helping reduce sprint blockers and
						improve team velocity
					</li>
					<li>
						Founded an AI/ML engineer improvement community that identified new
						opportunities for product innovation and helped integrate generative
						AI into our daily engineering practices
					</li>
					<li>
						Contributed to high-value features for Blackbaud's Student
						Information System as part of a SAFe (Scaled Agile Framework) team
					</li>
				</ul>
			</section>

			{/* Technical Environment */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Technical Environment
				</h2>
				<p className='font-mono text-gray-800 mb-4'>I worked primarily with:</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Angular 7 for frontend development</li>
					<li>ASP.NET for backend services</li>
					<li>SQL for Database Access</li>
					<li>Azure Microservices for cloud infrastructure</li>
					<li>Jasmine and Karma for testing</li>
				</ul>
			</section>

			{/* Conclusion */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					This role taught me the importance of balancing technical excellence
					with practical business needs while working in a large-scale
					enterprise environment. It also highlighted the value of fostering a
					strong engineering culture through initiatives like the Developer
					Check-in and AI/ML community.
				</p>
			</section>
		</div>
	);
}
