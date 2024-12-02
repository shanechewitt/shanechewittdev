// lib/types/content.ts
import { ComponentType } from 'react';

export interface ContentSection {
	id: string;
	navOption: string;
	component: ComponentType;
}

export interface ContentGroup {
	type: 'projects' | 'passions' | 'education';
	sections: ContentSection[];
}
