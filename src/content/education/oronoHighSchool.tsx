// components/content/education/OronoHighSchool.tsx

export default function OronoHighSchool() {
	return (
		<div className='space-y-8'>
			{/* Title Section */}
			<div className='mb-12'>
				<h1 className='font-mono text-3xl font-medium mb-2'>
					Orono High School
				</h1>
				<h2 className='font-mono text-xl text-gray-600'>
					Leadership & Achievement at Orono High School
				</h2>
			</div>

			{/* Academic Excellence */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Academic Excellence
				</h2>
				<p className='font-mono text-gray-800'>
					As a National Merit Commended Scholar and AP Scholar with Distinction,
					I balanced rigorous academics with extensive extracurricular
					leadership and early work experience.
				</p>
			</section>

			{/* Leadership Roles */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Leadership Roles
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					My high school years were defined by leadership across multiple
					domains:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>Two-time Speech Team Captain</li>
					<li>Golf Team Captain, senior year</li>
					<li>Selected as Commencement Speaker for graduation</li>
				</ul>
			</section>

			{/* Early Professional Experience */}
			<section>
				<h2 className='font-mono text-2xl font-medium mb-4'>
					Early Professional Experience
				</h2>
				<p className='font-mono text-gray-800 mb-4'>
					While maintaining academic excellence and leadership roles, I gained
					valuable management experience:
				</p>
				<ul className='font-mono text-gray-800 space-y-2 list-disc ml-6'>
					<li>
						Progressed from crew member to manager at Dairy Queen in just a year
						at 16 years old
					</li>
					<li>
						Developed early skills in team leadership and business operations
					</li>
					<li>
						Balanced work responsibilities with academics and extracurriculars
					</li>
					<li>Learned crucial time management and prioritization skills</li>
				</ul>
			</section>

			{/* Conclusion */}
			<section>
				<p className='font-mono text-gray-800 italic'>
					This combination of academic achievement, leadership roles, and early
					work experience laid the foundation for my future success in
					engineering and technology. Managing a business while excelling in
					academics and activities taught me invaluable lessons about balancing
					multiple priorities—a skill that continues to serve me well in my
					technical career.
				</p>
			</section>
		</div>
	);
}
