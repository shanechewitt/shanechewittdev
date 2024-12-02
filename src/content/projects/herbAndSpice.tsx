// components/content/projects/HerbAndSpice.tsx

export default function HerbAndSpice() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>Herb and Spice</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Voice-Activated Spice Organization System
				</h2>
			</div>

			{/* Overview */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Overview</h2>
				<p className='font-mono text-gray-800'>
					Herb & Spice is an innovative, voice-controlled spice organization
					system that combines embedded systems, mechanical engineering, and
					industrial design to reimagine kitchen accessibility and organization.
				</p>
			</section>

			{/* Challenge */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Challenge</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Traditional spice organization presents several problems:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Limited accessibility for users with mobility constraints</li>
					<li>Difficulty finding specific spices in crowded cabinets</li>
					<li>Inconsistent measuring and dispensing</li>
					<li>Space inefficiency in kitchen storage</li>
				</ul>
			</section>

			{/* Solution */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>The Solution</h2>
				<p className='font-mono text-gray-800 mb-6'>
					I designed a comprehensive system that integrates three core
					components:
				</p>

				<h3 className='font-mono text-xl font-medium mb-3'>
					Software Architecture
				</h3>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6 mb-6'>
					<li>Developed efficient voice recognition system in C for Arduino</li>
					<li>
						Implemented keyword spotting for "Herb" and "Spice" activation
					</li>
					<li>
						Created precise motor control algorithms for accurate carousel
						positioning
					</li>
					<li>Optimized code for the limited resources of embedded systems</li>
				</ul>

				<h3 className='font-mono text-xl font-medium mb-3'>
					Electronic Systems
				</h3>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6 mb-6'>
					<li>
						Designed custom audio processing circuit using:
						<ul className='ml-6 mt-2 space-y-2 list-disc'>
							<li>Electret microphone for voice input</li>
							<li>LM386 amplifier for signal conditioning</li>
							<li>Arduino Uno as the central processing unit</li>
							<li>Stepper motors for precise mechanical control</li>
						</ul>
					</li>
					<li>Implemented robust power management system</li>
					<li>Created modular circuit design for easy maintenance</li>
				</ul>

				<h3 className='font-mono text-xl font-medium mb-3'>
					Mechanical Design
				</h3>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Engineered dual-carousel system for organized spice storage</li>
					<li>Designed custom motor coupling mechanism</li>
					<li>Created protective electronics enclosure</li>
					<li>Developed specialized spice container system (in progress)</li>
				</ul>
			</section>

			{/* Technical Implementation */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Technical Implementation
				</h2>
				<div className='space-y-4'>
					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Microcontroller:
						</h3>
						<p className='font-mono text-gray-800 ml-6'>
							Arduino Uno running custom C firmware
						</p>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Voice Processing:
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>Custom keyword detection algorithm</li>
							<li>Audio signal conditioning and filtering</li>
						</ul>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Motion Control:
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>Precise stepper motor positioning</li>
							<li>Dual-carousel synchronization</li>
						</ul>
					</div>

					<div>
						<h3 className='font-mono text-xl font-medium mb-2'>
							Physical Design:
						</h3>
						<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
							<li>3D-printed components for rapid prototyping</li>
							<li>Modular assembly for easy maintenance</li>
							<li>Future-proofed design for automated dispensing system</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Future Development */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Future Development
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					Current development focuses on:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Automated dispensing mechanism for precise measurements</li>
					<li>Custom spice container design for optimal dispensing</li>
					<li>Enhanced voice recognition for broader command set</li>
					<li>Improved user feedback system</li>
				</ul>
			</section>

			{/* Impact */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>Impact</h2>
				<p className='font-mono text-gray-800'>
					Herb & Spice demonstrates how combining software, electronics, and
					mechanical design can create practical solutions that enhance kitchen
					accessibility and organization. The project showcases the potential
					for voice-controlled systems to improve daily tasks while providing
					insights into the challenges of developing consumer hardware products.
				</p>
			</section>
		</div>
	);
}
