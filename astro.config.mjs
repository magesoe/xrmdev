import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'XRM.DEV',
			logo: {
				light: './src/assets/lightxrmdev.png',
				dark: './src/assets/darkxrmdev.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/magesoe/xrmdev',
				linkedin: 'https://www.linkedin.com/in/xrmwizard'
			},
			sidebar: [
				{
					label: 'Knowledge',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'knowledge/overview' },
						{ label: 'Data Model', autogenerate: { directory: 'knowledge/datamodel' } },
						{ label: 'Business Logic', autogenerate: { directory: 'knowledge/businesslogic' } },
						{ label: 'Integrations', autogenerate: { directory: 'knowledge/integrations' } },
						{ label: 'User Experience', autogenerate: { directory: 'knowledge/ux' } },
						{ label: 'Productivity Tools', autogenerate: { directory: 'knowledge/tools' } },
					],
				},
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
			],
		}),
	],
});
