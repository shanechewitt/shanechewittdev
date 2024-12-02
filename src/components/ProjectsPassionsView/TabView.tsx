'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

interface ContentSection {
	id: string;
	navOption: string;
	componentName: string;
}

interface TabViewProps {
	sections: ContentSection[];
}

export default function TabView({ sections }: TabViewProps) {
	const [selectedSection, setSelectedSection] = useState<ContentSection>(
		sections[0]
	);

	// Dynamically import the selected component
	const ContentComponent = dynamic(
		() => import(`@/content/${selectedSection.componentName}`),
		{
			loading: () => <div className='animate-pulse'>Loading...</div>,
		}
	);

	return (
		<div className='flex min-h-[calc(100vh-76px)]'>
			{/* Sidebar */}
			<div className='w-64 border-r border-gray-200 p-6 space-y-4'>
				{sections.map((section) => (
					<button
						key={section.id}
						onClick={() => setSelectedSection(section)}
						className={`w-full text-left p-4 rounded-lg transition-colors ${
							selectedSection.id === section.id
								? 'bg-gray-100'
								: 'hover:bg-gray-50'
						}`}
					>
						<span className='font-mono block'>{section.navOption}</span>
					</button>
				))}
			</div>

			{/* Main Content */}
			<div className='flex-1 p-8 max-w-5xl'>
				<ContentComponent />
			</div>
		</div>
	);
}
