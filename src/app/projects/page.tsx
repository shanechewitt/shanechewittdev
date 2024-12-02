import TabView from '@/components/ProjectsPassionsView/TabView';
import { projectsContent } from '@/content/projects';

export const metadata = {
	title: 'Projects | Shane Hewitt',
	description: 'Personal projects and work by Shane Hewitt',
};

export default function ProjectsPage() {
	return <TabView sections={projectsContent.sections} />;
}
