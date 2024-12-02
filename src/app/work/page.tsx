import TabView from '@/components/ProjectsPassionsView/TabView';
import { workContent } from '@/content/work';

export const metadata = {
	title: 'Work Experience | Shane Hewitt',
	description: 'Professional experience of Shane Hewitt',
};

export default function WorkPage() {
	return <TabView sections={workContent.sections} />;
}
