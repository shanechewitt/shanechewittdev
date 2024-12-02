import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-source-code-pro)', 'Source Code Pro', 'monospace'],
			},
		},
	},
	plugins: [],
};

export default config;
