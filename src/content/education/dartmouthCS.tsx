// components/content/education/DartmouthCS.tsx

export default function DartmouthCS() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>
					Dartmouth College
				</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Computer Science at Dartmouth College
				</h2>
			</div>

			{/* Academic Excellence */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Academic Excellence
				</h2>
				<p className='font-mono text-gray-800'>
					As a Computer Science and Engineering double major at Dartmouth
					College, I distinguished myself through academic achievement and
					practical applications of computer science principles. My work earned
					two academic citations, notably in Full-Stack Web Development and
					Senior Design & Implementation, recognizing exceptional performance in
					these challenging areas.
				</p>
			</section>

			{/* The Lovelace Research Scholar Program */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					The Lovelace Research Scholar Program
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					As a Lovelace Research Scholar, I had the opportunity to dive deep
					into computer science research and advanced topics. This selective
					program allowed me to:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Analyze the dynamic relationship between COVID-19 deaths and a
						hospital's ability to dynamically expand
					</li>
					<li>Collaborate with faculty on complex technical challenges</li>
					<li>Develop advanced problem-solving skills</li>
					<li>Bridge theoretical concepts with practical applications</li>
				</ul>
			</section>

			{/* Teaching and Mentorship */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Teaching and Mentorship
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					My passion for computer science extended beyond my own studies into
					helping others master complex technical concepts. As a Teaching
					Assistant for Full-Stack Web Development, I:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Guided students through the intricacies of modern web development
					</li>
					<li>Led hands-on coding sessions and debugging workshops</li>
					<li>Mentored peers in best practices for software development</li>
					<li>Helped shape the next generation of Dartmouth developers</li>
				</ul>
			</section>

			{/* Technical Foundation */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Technical Foundation
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					The Computer Science curriculum at Dartmouth provided me with a robust
					foundation in:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Software Engineering Principles</li>
					<li>Algorithm Design and Analysis</li>
					<li>Database Systems</li>
					<li>Computer Networks</li>
					<li>Systems Programming</li>
					<li>Web Development</li>
					<li>Software Design Patterns</li>
				</ul>
			</section>

			{/* Conclusion */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					This comprehensive education, combined with hands-on experience
					through teaching and research, prepared me well for my current role as
					a Software Engineering Lead, where I continue to build upon these
					foundational skills.
				</p>
			</section>
		</div>
	);
}
