import TabView from '@/components/ProjectsPassionsView/TabView';
import { passionsContent } from '@/content/passions';

export const metadata = {
	title: 'Passions | Shane Hewitt',
	description: 'Personal passions and interests of Shane Hewitt',
};

export default function PassionsPage() {
	return <TabView sections={passionsContent.sections} />;
}
