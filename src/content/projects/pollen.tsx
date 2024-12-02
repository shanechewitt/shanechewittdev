// components/content/projects/Pollen.tsx

export default function Pollen() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>Pollen</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Automating Biotech Research Analysis
				</h2>
			</div>

			{/* Overview Section */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Overview</h2>
				<p className='font-mono text-gray-800'>
					As CTO and co-founder of Pollen, I led the development of AI-powered
					tools that automate complex biotech research processes, earning
					acceptance into the prestigious Z-Fellows program and advancing to Y
					Combinator interviews (S23).
				</p>
			</section>

			{/* Challenge Section */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Challenge</h2>
				<p className='font-mono text-gray-800'>
					Biotech researchers spend countless hours on manual data analysis
					tasks that could be automated, particularly in protein analysis and
					mass spectrometry. These manual processes are not only time-consuming
					but also prone to human error and inconsistency, creating a
					significant bottleneck in research workflows.
				</p>
			</section>

			{/* Solution Section */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Solution</h2>
				<p className='font-mono text-gray-800 mb-6'>
					During my time at Pollen, I rapidly developed and iterated on multiple
					MVPs in close collaboration with research laboratories, focusing on
					two key areas:
				</p>

				<h3 className='font-mono text-xl font-medium mb-3'>
					Western Blot Analysis Automation
				</h3>
				<p className='font-mono text-gray-800 mb-4'>
					I developed a machine vision pipeline that revolutionized the
					traditional Western Blot analysis workflow:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6 mb-6'>
					<li>
						Automated the detection and measurement of protein expression bands
					</li>
					<li>Eliminated manual box placement and measurement processes</li>
					<li>
						Generated comprehensive analysis reports from simple PNG uploads
					</li>
					<li>
						Significantly reduced analysis time while improving consistency
					</li>
				</ul>

				<h3 className='font-mono text-xl font-medium mb-3'>
					Mass Spectrometry Data Analysis
				</h3>
				<p className='font-mono text-gray-800 mb-4'>
					I created an intelligent data processing pipeline for high-throughput
					mass spectrometry:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Implemented UMAP dimensionality reduction for complex dataset
						analysis
					</li>
					<li>
						Built an intuitive interface for CSV data upload and processing
					</li>
					<li>Developed automated outlier detection algorithms</li>
					<li>Generated downloadable visualizations and analysis reports</li>
				</ul>
			</section>

			{/* Technical Implementation Section */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Technical Implementation
				</h2>
				<ul className='font-mono text-gray-800 space-y-4 list-none'>
					<li>
						<span className='font-medium'>Frontend:</span> React 18 with Redux
						for state management
					</li>
					<li>
						<span className='font-medium'>Backend:</span> Flask-based API
						handling complex data processing
					</li>
					<li>
						<span className='font-medium'>Machine Learning:</span>
						<ul className='ml-6 mt-2 space-y-2 list-disc'>
							<li>TensorFlow for machine vision tasks</li>
							<li>XGBoost for advanced data analysis</li>
							<li>Custom UMAP implementations for dimensionality reduction</li>
						</ul>
					</li>
					<li>
						<span className='font-medium'>Data Storage:</span> MongoDB for
						flexible research data management
					</li>
				</ul>
			</section>

			{/* Impact Section */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Impact & Learnings
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Leading Pollen taught me invaluable lessons about:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6 mb-6'>
					<li>Rapid MVP development and iteration based on user feedback</li>
					<li>Building products in close collaboration with end-users</li>
					<li>Navigating the startup funding landscape</li>
					<li>Balancing technical excellence with business needs</li>
				</ul>
				<p className='font-mono text-gray-800 italic'>
					The experience of building Pollen from concept to Y Combinator
					interview demonstrated the potential for AI to transform scientific
					research workflows while teaching me crucial lessons about startup
					leadership and product development.
				</p>
			</section>
		</div>
	);
}
