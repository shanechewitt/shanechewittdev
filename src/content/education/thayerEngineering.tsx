// components/content/education/ThayerEngineering.tsx

export default function ThayerEngineering() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>
					Thayer School of Engineering
				</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Engineering Excellence at Thayer School of Engineering
				</h2>
			</div>

			{/* Accelerated Achievement */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Accelerated Achievement
				</h2>
				<p className='font-mono text-gray-800'>
					In just four years, I completed both a traditional undergraduate
					degree (double major in Computer Science and Engineering Sciences) and
					a Bachelor of Engineering in Computer Engineering—a program typically
					requiring five years. This accelerated achievement demonstrates my
					ability to master complex technical concepts while managing multiple
					demanding workstreams.
				</p>
			</section>

			{/* Teaching & Mentorship */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Teaching & Mentorship
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					As a Teaching Assistant for three core engineering courses, I helped
					shape the technical foundations of future engineers:
				</p>

				<div className='space-y-6'>
					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Digital Electronics
						</h3>
						<p className='font-mono text-gray-800 mb-2'>
							My favorite teaching experience centered on FPGA programming with
							VHDL, where I:
						</p>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>Guided students through complex system design principles</li>
							<li>
								Taught modular development approaches to break down projects
							</li>
							<li>
								Helped students grasp the importance of breaking down complex
								systems into manageable components
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Introduction to Scientific Computing
						</h3>
						<p className='font-mono text-gray-800 mb-2'>
							Introduced fundamental programming concepts through:
						</p>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>C programming for engineering applications</li>
							<li>MATLAB implementation for scientific computing</li>
							<li>Practical problem-solving in engineering contexts</li>
						</ul>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Discrete and Probabilistic Systems
						</h3>
						<p className='font-mono text-gray-800 mb-2'>
							Led students through advanced probability concepts:
						</p>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>Basic probability theory and Bayes' Theorem</li>
							<li>Advanced topics in Discrete Markov Models</li>
							<li>Applications in engineering decision-making</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Capstone Achievement */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Capstone Achievement: IDEX Manufacturing Automation
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					My proudest accomplishment at Thayer was leading a team collaboration
					with IDEX, a medical device parts manufacturer, to solve a critical
					manufacturing challenge. Our six- month project delivered:
				</p>

				<div className='space-y-4'>
					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Technical Innovation
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>
								Developed a 5-step automated reorientation system for ball seats
							</li>
							<li>
								Implemented machine vision for part detection and orientation
							</li>
							<li>
								Created custom G-code override system for an Ender3 printer
							</li>
							<li>
								Integrated pneumatic gripper system for precise part handling
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Business Impact
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>
								Eliminated manual orientation bottleneck in manufacturing
								process
							</li>
							<li>Increased production efficiency through automation</li>
							<li>Reduced human error in part orientation</li>
							<li>
								Delivered working prototype within aggressive 6-month timeline
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Conclusion */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					This project exemplified Thayer's emphasis on practical
					problem-solving and demonstrated my ability to lead complex technical
					projects from concept to completion.
				</p>
			</section>
		</div>
	);
}
