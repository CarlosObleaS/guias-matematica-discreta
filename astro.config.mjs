// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://CarlosObleaS.github.io',
	base: '/guias-matematica-discreta/',
	integrations: [
		starlight({
			title: 'Guías de Matemática Discreta',
			social: {
				github: 'https://github.com/CarlosObleaS/guias-matematica-discreta',
			},
			sidebar: [
				{
					label: 'Guías Rápidas',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});