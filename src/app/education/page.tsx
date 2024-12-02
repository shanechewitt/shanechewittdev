// app/education/page.tsx

import TabView from '@/components/ProjectsPassionsView/TabView';
import { educationContent } from '@/content/education';

export const metadata = {
	title: 'Education | Shane Hewitt',
	description: 'Educational background of Shane Hewitt',
};

export default function EducationPage() {
	return <TabView sections={educationContent.sections} />;
}
