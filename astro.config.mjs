// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://CarlosObleaS.github.io',
	base: '/guias-matematica-discreta/',
	integrations: [
		starlight({
			title: 'Guías de Matemática Discreta',
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